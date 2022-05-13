/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

function switchCaseAfterSpace(input,switchFirst) {
  let result = "";
  for (let i = 0 ; i < input.length ; i++) {
    if (i == 0 && switchFirst) {
      result += input[i].toUpperCase();
    } else if (i > 0 && input[i-1] === " ") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}

function switchChar(input,oldChar,newChar) {
  let result = "";
  for (let i = 0 ; i < input.length ; i++) {
    if (input[i] === oldChar) {
      result += newChar;
    } else {
      result += input[i];
    }
  }
  return result;
}

function upper(input,condition) {
  const vowels = ["a","e","i","o","u"];
  let result = "";
  for ( let i = 0 ; i < input.length ; i++) {
    if ((condition === "vowel" && vowels.includes(input[i])) ||
      (condition === "consonant" && !vowels.includes(input[i])) ||
      condition === "all") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}

function switchCaze(input, caze) {
  switch (caze) {
    case "camel":
      input = switchCaseAfterSpace(input,false);
      input = switchChar(input," ","");
      break;
    case "pascal":
      input = switchCaseAfterSpace(input,true);
      input = switchChar(input," ","");
      break;
    case "snake":
      input = switchChar(input," ","_");
      break;
    case "kebab":
      input = switchChar(input," ","-");
      break;
    case "title":
      input = switchCaseAfterSpace(input,true);
      break;
    case "vowel":
      input = upper(input,"vowel");
      break;
    case "consonant":
      input = upper(input,"consonant");
      break;
    case "upper":
      input = upper(input,"all");
      break;
  }
  return input;
}

const makeCaze = function(input, caze) {
  // Put your solution here
  if (Array.isArray(caze)) {
    for (let i = 0 ; i < caze.length ; i++ ) {
      input = switchCaze(input,caze[i]);
    }
  } else {
      input = switchCaze(input,caze);
  }
  return input;
}


console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

