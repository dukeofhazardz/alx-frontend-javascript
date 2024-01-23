export default function createIteratorObject(report) {
  const iterator = [];
  const employees = report.allEmployees;
  const keys = Object.keys(employees);
  keys.forEach((key) => {
    const value = employees[key];
    iterator.push(...value);
  });
  return iterator;
}
