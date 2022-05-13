/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) {
  // Your code here
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let year = date.substring(0,4);
  let month = months[date.substring(5,7) -1];
  let day = date.substring(8,10);
  if (day < 10) {
    day = day.substring(1,2);
  }
  switch (day) {
    case "1":
    case "21":
    case "31":
      day += "st";
      break;
    case "2":
    case "22":
      day += "nd";
      break;
    case "3","23":
      day += "rd";
      break;
    default:
      day += "th";
  }

  return month + " " + day + ", " + year;

};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

console.log(talkingCalendar("2017/12/31")); // December 2nd, 2017