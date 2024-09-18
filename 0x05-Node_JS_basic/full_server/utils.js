import { readFile } from 'fs';
/**
 * async reads a database and returns a promise
 * @param {string} path path to the database
 * @returns {Promise} promise
 */
const readDatabase = (dbPath) => {
  return new Promise((resolve, reject) => {
    readFile(dbPath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        let students = data.split('\n');
        const info = {};
        students = students.slice(1, students.length - 1);
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (info[field]) {
            info[field].push(firstName);
          } else {
            info[field] = [firstName];
          }
        });
        resolve(info);
      }
    }
    );
  });
};
export default readDatabase;
