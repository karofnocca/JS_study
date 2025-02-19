"use strict";

let ourArr = [5, 7, 1, 1, 2, 3, 22];

ourArr.sort((a, b) => a - b);
function getMinOfSum(ourArr) {
  let sumOfNums = 0;
  let indexOfNum = 0;
  while (indexOfNum < ourArr.length) {
    if (sumOfNums + 1 < ourArr[indexOfNum]) {
      return sumOfNums + 1;
    } else {
      sumOfNums += ourArr[indexOfNum];
      indexOfNum++;
    }
  }
  return sumOfNums + 1;
}

console.log(getMinOfSum(ourArr));
