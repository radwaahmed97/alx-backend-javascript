interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Radwa',
    lastName: 'Ahmed',
    age: 27,
    location: 'Canada'
};

const student2: Student = {
    firstName: 'Mohamed',
    lastName: 'Refaat',
    age: 33,
    location: 'Canada'
};

const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
