// create an employee record
const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: new Array(),
    timeOutEvents: new Array(),
  };
};
// create employee records from an array of arrays
const createEmployeeRecords = (arrays) => {
  return arrays.map((array) => createEmployeeRecord(array));
};
// record the time in for an employee
function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}
// record the time out for an employee
function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}
// calculate the hours worked by an employee on a specific date
function hoursWorkedOnDate(dateTime) {
  const timeOutHour = this.timeOutEvents.filter(
    (event) => event.date === dateTime
  )[0].hour;
  const timeinHour = this.timeInEvents.filter(
    (event) => event.date === dateTime
  )[0].hour;
  return (timeOutHour - timeinHour) / 100;
}
// calculate the wages earned by an employee on a specific date
function wagesEarnedOnDate(dateTime) {
  return hoursWorkedOnDate.call(this, dateTime) * this.payPerHour;
}
// find an employee by their first name
function findEmployeeByFirstName(eployees, firstName) {
  return eployees.filter((employee) => employee.firstName === firstName)[0];
}
// calculate the total payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );
}
// calculate the total wages for an employee
const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });
  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  );
  return payable;
};
