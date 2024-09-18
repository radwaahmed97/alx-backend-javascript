const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} Path The path to the CSV data file.
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
                const studentRecord = line.split(',');
                const studentPropValues = studentRecord
                    .slice(0, studentRecord.length - 1);
                const field = studentRecord[studentRecord.length - 1];
                if (!Object.keys(studentGroups).includes(field)) {
                    studentGroups[field] = [];
                }
                const studentEntries = studentPropNames
                    .map((propName, idx) => [propName, studentPropValues[idx]]);
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