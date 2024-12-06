import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name cannot be more than 20 chars')
    .regex(/^[A-Z][a-z]*$/, '{VALUE} is not in capitalized format!')
    .nonempty('First name is required.'),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .regex(/^[a-zA-Z]+$/, '{VALUE} is not valid')
    .nonempty('Last name is required.'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required.'),
  fatherContactNo: z.string().nonempty('Father contact number is required.'),
  fatherOccupation: z.string().nonempty('Father occupation is required.'),
  motherName: z.string().nonempty('Mother name is required.'),
  motherContactNo: z.string().nonempty('Mother contact number is required.'),
  motherOccupation: z.string().nonempty('Mother occupation is required.'),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Local guardian name is required.'),
  occupation: z.string().nonempty('Local guardian occupation is required.'),
  contactNo: z.string().nonempty('Local guardian contact number is required.'),
});

const studentValidationSchema = z.object({
  id: z.string().nonempty('Student ID is required.'),
  password: z.string().min(8).max(20),
  name: userNameValidationSchema.refine(
    (value) => value !== undefined,
    'Student name is required.',
  ),
  gender: z
    .enum(['male', 'female', 'other'], {
      errorMap: () => ({
        message:
          '{VALUE} is not a valid gender. Valid options ar  male, female, or other.',
      }),
    })
    .refine((value) => value !== undefined, 'Gender is required.'),
  dateOfBirth: z.string().nonempty('Date of birth is required.'),
  email: z
    .string()
    .email('{VALUE} is not a valid type')
    .nonempty('Email address is required.'),
  contactNo: z.string().nonempty('Contact number is required.'),
  emergencyContactNo: z
    .string()
    .nonempty('Emergency contact number is required.'),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
    .optional()
    .refine(
      (value) => value !== undefined,
      '{VALUE} is not a valid blood group.',
    ),
  presentAddress: z.string().nonempty('Present address is required.'),
  parmanentAddress: z.string().nonempty('Permanent address is required.'),
  guardian: guardianValidationSchema.refine(
    (value) => value !== undefined,
    'Guardian information is required.',
  ),
  localGuardian: localGuardianValidationSchema.refine(
    (value) => value !== undefined,
    'Local guardian information is required.',
  ),
  profileImg: z.string().optional(),
  isActive: z
    .enum(['active', 'blocked'])
    .default('active')
    .refine(
      (value) => value !== undefined,
      '{VALUE} is not a valid status. Valid options are active or blocked.',
    ),
});

export default studentValidationSchema;
