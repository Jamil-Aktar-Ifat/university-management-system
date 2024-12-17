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

const createStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      password: z.string(),
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
      dateOfBirth: z.string(),
      email: z.string().email('{VALUE} is not a valid type'),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema
};
