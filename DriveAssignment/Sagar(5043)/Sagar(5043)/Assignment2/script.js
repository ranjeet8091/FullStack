/* Type your javascript code here */
const Emp = [
   {
      EmpName: " Arpit Jain",
      EmpID: 1068
   },
   {
      EmpName: " Samuel  Bond",
      EmpID: 1079
   },
   {
      EmpName: " Rishabh  Garg",
      EmpID: 1080
   },
]
// Task 1
function getEmployeeIndex(empArray, empID) {
   for (let i = 0; i < empArray.length; i++) {
      if (empArray[i].EmpID === empID) {
         return i;
      }
   }
   return -1;
}
console.log(getEmployeeIndex(Emp, 1079));
console.log(getEmployeeIndex(Emp, 1081));
// Task 2
function getEmployeeInitials(empArray) {
   return empArray.map(emp => {
      return emp.EmpName.split(' ').map(word => word[0]).join('');
   });
}
console.log(getEmployeeInitials(Emp));