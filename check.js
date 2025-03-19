const moment = require('moment');

function getFiscalYear() {
  const startMonthName = "April";
  const endMonthName = "March";
  // console.log(moment().quarter);
  if (moment().quarter() === 1) {
    // should only run in January, February and March
    return {
      start: moment(moment().subtract(1, 'year').month(startMonthName).startOf('month')).format("DD/MM/YYYY"),
      end: moment(moment().month(endMonthName).endOf('month')).format("DD/MM/YYYY")
    };
  } else {
    // should run in remaining months
    return {
      start: moment(moment().month(startMonthName).startOf('month')).format("DD/MM/YYYY"),
      end: moment(moment().add(1, 'year').month(endMonthName).endOf('month')).format("DD/MM/YYYY")
    };
  }
}

const result = getFiscalYear();
console.log(result);