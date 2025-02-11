"use strict";

//#1
const arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
const arr2 = [1, 6, -1, 10];

function findSequence(arr1, arr2) {
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] === arr2[arr2Index]) {
      arr2Index++;
    }
    arr1Index++;
  }
  return arr2Index === arr2.length;
}

console.log(findSequence(arr1, arr2));

//#2

("use strict");

let arr = [-4, -2, 1, 3];
let emptyArr = [];

let startIndx = 0;
let finishIndx = arr.length - 1;

function toMach(arr) {
  while (startIndx !== finishIndx) {
    if (arr[startIndx] ** 2 > arr[finishIndx] ** 2) {
      emptyArr.unshift(arr[startIndx] ** 2);
      startIndx++;
    } else if (arr[startIndx] ** 2 < arr[finishIndx] ** 2) {
      emptyArr.unshift(arr[finishIndx] ** 2);
      finishIndx--;
    }
  }
  emptyArr.unshift(arr[finishIndx] ** 2);
  return emptyArr;
}

console.log(toMach(arr));
