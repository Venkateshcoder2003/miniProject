import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.svm import SVC

app = Flask(__name__)
CORS(app)

# Load the model and necessary data
try:
    model = pickle.load(open('models/svc.pkl', 'rb'))
    symptoms_dict = pickle.load(open('models/symptoms_dict.pkl', 'rb'))
    diseases_list = pickle.load(open('models/diseases_list.pkl', 'rb'))
    print("Model and data loaded successfully.")
    print(f"Number of symptoms: {len(symptoms_dict)}")
    print(f"Number of diseases: {len(diseases_list)}")
except FileNotFoundError as e:
    print(f"Error: {e}")
    print("Please ensure that the model and data files are present in the 'models' directory.")
    exit(1)

# Load recommendation data
description_df = pd.read_csv("datasets/description.csv")
precautions_df = pd.read_csv("datasets/precautions_df.csv")
medications_df = pd.read_csv("datasets/medications.csv")
diets_df = pd.read_csv("datasets/diets.csv")
workout_df = pd.read_csv("datasets/workouts.csv")

def helper(dis):
    desc = description_df[description_df['Disease'] == dis]['Description'].iloc[0]
    pre = precautions_df[precautions_df['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
    pre = [col for col in pre.values[0]]
    med = medications_df[medications_df['Disease'] == dis]['Medication'].tolist()
    die = diets_df[diets_df['Disease'] == dis]['Diet'].tolist()
    wrkout = workout_df[workout_df['disease'] == dis]['workout'].tolist()
    return desc, pre, med, die, wrkout

@app.route('/predictDisease', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Data from express server: ", data)
        symptoms = data['symptoms']
        
        # Create input vector
        input_vector = np.zeros(len(symptoms_dict))
        print("Initial input vector: ", input_vector)

        for symptom in symptoms:
            if symptom in symptoms_dict:
                input_vector[symptoms_dict[symptom]] = 1
        
        print("Updated input vector: ", input_vector)
        print("Input vector shape: ", input_vector.shape)
        print("Model expected shape: ", model.n_features_in_)
        
        # Ensure the input vector has the correct number of features
        if len(input_vector) != model.n_features_in_:
            return jsonify({'error': f'Input vector has {len(input_vector)} features, but model expects {model.n_features_in_} features.'}), 400
        
        # Make prediction
        prediction = model.predict([input_vector])[0]
        print(f"Raw prediction: {prediction}")
        
        if prediction not in diseases_list:
            return jsonify({'error': f'Predicted disease index {prediction} not found in diseases list.'}), 500
        
        predicted_disease = diseases_list[prediction]
        print(f"Predicted disease: {predicted_disease}")
        
        # Get disease details
        description, precautions, medications, diets, workouts = helper(predicted_disease)
        
        return jsonify({
            'disease': predicted_disease,
            'description': description,
            'precautions': precautions,
            'medications': medications,
            'diets': diets,
            'workouts': workouts
        })
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=7000)

