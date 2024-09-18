import readDatabase from '../utils';
/**
 * controller class for students
 */
export default class StudentsController {
  /**
     * sets the student database on response object
     * @param {Object} request request object
     * @param {Object} response response object
     */
  static getAllStudents (request, response) {
    const body = ['This is the list of our students'];
    readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
      .then((courseInfo) => {
        for (const course in courseInfo) {
          if (Array.isArray(courseInfo[course])) {
            const students = courseInfo[course];
            body.push(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`);
          }
        }
        response.statusCode = 200;
        response.send(body.join('\n'));
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(error.message);
      });
  }

  /**
     * search for students in request
     * @param {Object} request request object
     * @param {Object} response response object
     */
  static getAllStudentsByMajor (request, response) {
    const major = request.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
        .then((courseInfo) => {
          if (Array.isArray(courseInfo[major])) {
            const students = courseInfo[major];
            response.statusCode = 200;
            response.send(`List: ${students.join(', ')}`);
          } else {
            response.statusCode = 500;
            response.send('Cannot load the database');
          }
        })
        .catch((error) => {
          response.statusCode = 500;
          response.send(error.message);
        });
    }
  }
}
