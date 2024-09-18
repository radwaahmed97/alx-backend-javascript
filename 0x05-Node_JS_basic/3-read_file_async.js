const fs = require('fs');
/**
 * countStudents is a function that reads a CSV file and prints the content of the file.
 * @param {String} Path the path to the csv file required to read by function
 * @return number of students
 */
const countStudents = (Path) => new Promise((resolve, reject) => {
    fs.readFile(Path, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
        }
        if (data) {
            const fLines = data
                .toString('utf-8')
                .trim()
                .split('\n');
            const studentGroups = {};
            const dbaseFields = fLines[0].split(',');
            const studentPropNames = dbaseFields
                .slice(0, dbaseFields.length - 1);

            for (const line of fLines.slice(1)) {
                const studentData = line.split(',');
                const studentPropVals = studentData
                    .slice(0, studentData.length - 1);
                const field = studentData[studentData.length - 1];
                if (!Object.keys(studentGroups).includes(field)) {
                    studentGroups[field] = [];
                }
                const studentEntries = studentPropNames
                    .map((propName, i) => [propName, studentPropVals[i]]);
                studentGroups[field].push(Object.fromEntries(studentEntries));
            }

            const numStudents = Object
                .values(studentGroups)
                .reduce((pre, cur) => (pre || []).length + cur.length);
            console.log(`Number of students: ${numStudents}`);
            for (const [field, group] of Object.entries(studentGroups)) {
                const studentNames = group.map((student) => student.firstname).join(', ');
                console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
            }
            resolve(true);
        }
    });
});

module.exports = countStudents;
