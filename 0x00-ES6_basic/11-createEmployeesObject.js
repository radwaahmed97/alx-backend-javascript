export default function createEmployeesObject(departmentName, employees) {
  const departmentemployees = {
    [departmentName]: employees,
  };
  return departmentemployees;
}
