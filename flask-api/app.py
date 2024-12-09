# from flask import Flask, request, jsonify
# import pickle
# import numpy as np
# import pandas as pd
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Load the model
# model = pickle.load(open('models/svc.pkl', 'rb'))

# # Load dictionaries
# symptoms_dict = {'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'vomiting': 11, 'fatigue': 14, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'cough': 24, 'high_fever': 25, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'nausea': 34, 'loss_of_appetite': 35, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41}

# diseases_list = {15: 'Fungal infection', 4: 'Allergy', 16: 'GERD', 9: 'Chronic cholestasis', 14: 'Drug Reaction', 33: 'Peptic ulcer disease', 1: 'AIDS', 12: 'Diabetes', 17: 'Gastroenteritis', 6: 'Bronchial Asthma'}

# # Load recommendation data
# description_df = pd.read_csv("datasets/description.csv")
# precautions_df = pd.read_csv("datasets/precautions_df.csv")
# medications_df = pd.read_csv("datasets/medications.csv")
# diets_df = pd.read_csv("datasets/diets.csv")

# def get_disease_details(disease_name):
#     description = description_df[description_df['Disease'] == disease_name]['Description'].iloc[0]
#     precautions = precautions_df[precautions_df['Disease'] == disease_name].iloc[0][1:].tolist()
#     medications = medications_df[medications_df['Disease'] == disease_name]['Medication'].tolist()
#     diets = diets_df[diets_df['Disease'] == disease_name]['Diet'].tolist()
    
#     return {
#         'description': description,
#         'precautions': precautions,
#         'medications': medications,
#         'diets': diets
#     }

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()
#         symptoms = data['symptoms']
        
#         # Create input vector
#         input_vector = np.zeros(len(symptoms_dict))
#         for symptom in symptoms:
#             if symptom in symptoms_dict:
#                 input_vector[symptoms_dict[symptom]] = 1
        
#         # Make prediction
#         prediction = model.predict([input_vector])[0]
#         predicted_disease = diseases_list[prediction]
        
#         # Get disease details
#         details = get_disease_details(predicted_disease)
        
#         return jsonify({
#             'disease': predicted_disease,
#             **details
#         })
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)


from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model
model = pickle.load(open('models/svc.pkl', 'rb'))

# Load dictionaries
symptoms_dict = {'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'vomiting': 11, 'fatigue': 14, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'cough': 24, 'high_fever': 25, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'nausea': 34, 'loss_of_appetite': 35, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41}

diseases_list = {15: 'Fungal infection', 4: 'Allergy', 16: 'GERD', 9: 'Chronic cholestasis', 14: 'Drug Reaction', 33: 'Peptic ulcer disease', 1: 'AIDS', 12: 'Diabetes', 17: 'Gastroenteritis', 6: 'Bronchial Asthma'}

# Load recommendation data
description_df = pd.read_csv("datasets/description.csv")
precautions_df = pd.read_csv("datasets/precautions_df.csv")
medications_df = pd.read_csv("datasets/medications.csv")
diets_df = pd.read_csv("datasets/diets.csv")

def get_disease_details(disease_name):
    description = description_df[description_df['Disease'] == disease_name]['Description'].iloc[0]
    precautions = precautions_df[precautions_df['Disease'] == disease_name].iloc[0][1:].tolist()
    medications = medications_df[medications_df['Disease'] == disease_name]['Medication'].tolist()
    diets = diets_df[diets_df['Disease'] == disease_name]['Diet'].tolist()
    
    return {
        'description': description,
        'precautions': precautions,
        'medications': medications,
        'diets': diets
    }

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symptoms = data['symptoms']
        
        # Create input vector
        input_vector = np.zeros(len(symptoms_dict))
        for symptom in symptoms:
            if symptom in symptoms_dict:
                input_vector[symptoms_dict[symptom]] = 1
        
        # Make prediction
        prediction = model.predict([input_vector])[0]
        predicted_disease = diseases_list[prediction]
        
        # Get disease details
        details = get_disease_details(predicted_disease)
        
        return jsonify({
            'disease': predicted_disease,
            **details
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=7000)

