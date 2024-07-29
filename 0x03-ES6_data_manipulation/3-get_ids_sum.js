export default function getStudentIdsSum(studentslist) {
  if (!Array.isArray(studentslist)) {
    return 0;
  }
  return (studentslist.reduce((acc, student) => acc + student.id, 0));
}
