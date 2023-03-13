const pwd = 'pas$word';
// const pwd = "wednesday";
// const pwd = "1234";

let result = pwd.length >= 12 ? 'password is very strong!'
: pwd.length >= 8 ? 'welcome!'
: 'sorry! password is too short!'

console.log(result);
