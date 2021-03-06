const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// comparing dates
const before = new Date('April 24 2021 11:42:00');

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));