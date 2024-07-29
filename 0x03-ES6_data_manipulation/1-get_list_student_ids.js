export default function getListStudentIds(studentslist) {
  if (!Array.isArray(studentslist)) {
    return [];
  }

  return studentslist.map((student) => student.id);
}
