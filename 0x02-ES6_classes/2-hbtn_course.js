export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nameinput) {
    if (typeof nameinput !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = nameinput;
  }

  set length(lengthinput) {
    if (typeof lengthinput !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = lengthinput;
  }

  set students(studentsinput) {
    if (!Array.isArray(studentsinput)) {
      throw TypeError('Students must be an array');
    }
    studentsinput.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = studentsinput;
  }
}
