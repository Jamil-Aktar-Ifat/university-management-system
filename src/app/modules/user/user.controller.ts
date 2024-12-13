const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body;

    const zodParsedData = studentValidationSchema.parse(studentData);


    const result = await StudentServices.createStudentIntoDB(zodParsedData); 

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};
