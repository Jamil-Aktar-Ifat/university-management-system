import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .pattern(/^[A-Z][a-z]*$/, 'capitalized format')
    .messages({
      'string.empty': 'First name is required.',
      'string.max': 'First name cannot be more than 20 chars',
      'string.pattern.base': '{#value} is not in capitalized format!',
    }),
  middleName: Joi.string().trim().allow(null, ''),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/, 'alphabetic characters only')
    .messages({
      'string.empty': 'Last name is required.',
      'string.pattern.base': '{#value} is not valid',
    }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father name is required.',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father contact number is required.',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father occupation is required.',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother name is required.',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother contact number is required.',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother occupation is required.',
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local guardian name is required.',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Local guardian occupation is required.',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Local guardian contact number is required.',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required.',
  }),
  name: userNameSchema.required().messages({
    'any.required': 'Student name is required.',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only':
      '{#value} is not a valid gender. Valid options are male, female, or other.',
    'string.empty': 'Gender is required.',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email address is required.',
    'string.email': '{#value} is not a valid type',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required.',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
    .messages({
      'any.only': '{#value} is not a valid blood group.',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required.',
  }),
  parmanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required.',
  }),
  guardian: guardianSchema.required().messages({
    'any.required': 'Guardian information is required.',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'any.required': 'Local guardian information is required.',
  }),
  profileImg: Joi.string().allow(null, ''),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only':
      '{#value} is not a valid status. Valid options are active or blocked.',
  }),
});

export default studentValidationSchema;
