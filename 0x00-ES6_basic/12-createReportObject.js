export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) => {
      let count = 0;
      for (const department in employeesList) {
        if (employeesList.hasOwnProperty(department)) {
          count += 1;
        }
      }
      return count;
    },
  };
}
