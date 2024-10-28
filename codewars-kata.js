/*
 ** https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
 **
 ** In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to
 ** either lowercase only or uppercase only based on:
 **  1: make as few changes as possible.
 **  2: if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
 **
 **  My Method stringCaseMethod1()
 **
 */

stringCaseMethod1 = (e) => {
  let stringParam = e;

  let numberOfUpperCase = 0;
  let numberOfLowerCase = 0;

  for (const char of stringParam) {
    if (char === char.toUpperCase()) {
      numberOfUpperCase = numberOfUpperCase + 1;
    }

    if (char === char.toLowerCase()) {
      numberOfLowerCase = numberOfLowerCase + 1;
    }
  }
  if (numberOfUpperCase === numberOfLowerCase) {
    stringParam = stringParam.toLowerCase();
  }

  if (numberOfUpperCase > numberOfLowerCase) {
    stringParam = stringParam.toUpperCase();
  }

  if (numberOfLowerCase > numberOfUpperCase) {
    stringParam = stringParam.toLowerCase();
  }
  return stringParam;
};

stringCaseMEthod2 = (str) => {
  let upperCase = str.split("").filter((x) => x === x.toUpperCase()).length;
  let lowerCase = str.length - upperCase;
  return upperCase > lowerCase ? str.toUpperCase() : str.toLowerCase();
};

stringCaseMEthod3 = (str) => {
  let upperCase = 0;
  let lowerCase = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      upperCase++;
    } else {
      lowerCase++;
    }
  }
  return lowerCase >= upperCase ? str.toLowerCase() : str.toUpperCase();
};

/*
 ** https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript
 **
 ** Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 ** The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 ** The next words should be always capitalized.
 ** EXAMPLE
 ** "the-stealth-warrior" gets converted to "theStealthWarrior"
 ** "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 ** "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 **
 **
 */


const convertDashToCamelCase = (str) => {
    let result = '';
    let shouldUpperCase = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            shouldUpperCase = true; // Indicate that the next character should be uppercase
        } else if (shouldUpperCase) {
            result += str[i].toUpperCase();
            shouldUpperCase = false; // Reset the flag
        } else {
            result += str[i];
        }
    }

    return result;
};






