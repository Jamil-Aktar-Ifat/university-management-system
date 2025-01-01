import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

export const generateStudentId = (payload: TAcademicSemester) => {
  const currentId = (0).toString();
  let incremenetId = (Number(currentId) + 1).toString().padStart(4, '0');
  incremenetId = `${payload.year}${payload.code}${incremenetId}`;
  return incremenetId;
};
