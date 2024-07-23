export default function createIteratorObject(report) {
  const employeesArray = [];
  for (const employee of Object.values(report.allEmployees)) {
    employeesArray.push(...employee);
  }
  return employeesArray;
}
