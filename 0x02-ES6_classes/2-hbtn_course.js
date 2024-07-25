export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });

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

  set name(value) {
    this._name = value;
  }

  set length(value) {
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students must be an array');
    }
    value.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = value;
  }
}
