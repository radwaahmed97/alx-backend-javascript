const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} Path The path to the CSV data file.
 */
const countStudents = (Path) => {
  if (!fs.existsSync(Path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(Path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fLines = fs
    .readFileSync(Path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbaseFields = fLines[0].split(',');
  const studentPropNames = dbaseFields.slice(0, dbaseFields.length - 1);

  for (const line of fLines.slice(1)) {
    const studentData = line.split(',');
    const studentPropVals = studentData.slice(0, studentData.length - 1);
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
};

module.exports = countStudents;
