// generate possible number in a week = 0-6
let dayNumber = Math.floor(Math.random() * 7);

if (dayNumber === 0) {
  console.log("Sunday");
} else if (dayNumber === 1) {
  console.log("Monday");
} else if (dayNumber === 2) {
  console.log("Tuesday");
} else if (dayNumber === 3) {
  console.log("Wednesday");
} else if (dayNumber === 4) {
  console.log("Thursday");
} else if (dayNumber === 5) {
  console.log("Friday");
} else if (dayNumber === 6) {
  console.log("Saturday");
} else {
  console.log("Invalid day number");
}
