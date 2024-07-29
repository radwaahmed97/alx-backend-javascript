export default function updateStudentGradeByCity(studentslist, city, newGrades) {
  const nograde = { grade: 'N/A' };
  if (!Array.isArray(studentslist)) {
    return [];
  }
  return studentslist
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (newGrades.filter((grades) => grades.studentId === student.id).pop() || nograde).grade,
    }));
}
