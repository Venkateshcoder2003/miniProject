// import Joi from 'joi';

// export const signUpValidation = (req, res, next) => {
//     const schema = Joi.object({
//         firstName: Joi.string().min(3).max(100).required(),
//         lastName: Joi.string().min(3).max(100).required(),
//         age: Joi.string().min(15).max(100).required(),
//         email: Joi.string().email().required(),
//         password: Joi.string().min(4).max(100).required()
//     })

//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).json({ message: "Bad Request check the form inputs once again", error });
//     }

//     next();
// }

// export const loginValidation = (req, res, next) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         password: Joi.string().min(4).max(100).required()
//     });
//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).json({ message: "Bad Request", error });
//     }

//     next();
// }



import Joi from 'joi';

export const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.empty': 'First name is required',
                'string.min': 'First name must be at least 3 characters long',
                'string.max': 'First name cannot exceed 100 characters'
            }),
        lastName: Joi.string()
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.empty': 'Last name is required',
                'string.min': 'Last name must be at least 3 characters long',
                'string.max': 'Last name cannot exceed 100 characters'
            }),
        age: Joi.number()
            .min(15)
            .max(100)
            .required()
            .messages({
                'number.base': 'Age must be a number',
                'number.empty': 'Age is required',
                'number.min': 'Age must be at least 15 years',
                'number.max': 'Age cannot exceed 100 years'
            }),
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.empty': 'Email is required',
                'string.email': 'Please enter a valid email address'
            }),
        password: Joi.string()
            .min(4)
            .max(100)
            .required()
            .messages({
                'string.empty': 'Password is required',
                'string.min': 'Password must be at least 4 characters long',
                'string.max': 'Password cannot exceed 100 characters'
            })
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(detail => ({
            field: detail.path[0],
            message: detail.message
        }));

        return res.status(400).json({
            status: 'error',
            errors: errorMessages
        });
    }

    next();
};

export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.empty': 'Email is required',
                'string.email': 'Please enter a valid email address'
            }),
        password: Joi.string()
            .min(4)
            .max(100)
            .required()
            .messages({
                'string.empty': 'Password is required',
                'string.min': 'Password must be at least 4 characters long',
                'string.max': 'Password cannot exceed 100 characters'
            })
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(detail => ({
            field: detail.path[0],
            message: detail.message
        }));

        return res.status(400).json({
            status: 'error',
            errors: errorMessages
        });
    }

    next();
};