"use strict";

let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTravers(array) {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let indexOfDirection = 0;
  let visitedPlace = {};
  let maxH = array.length;
  let maxW = array[0].length;
  let startH = 0; //строчка
  let startW = 0; //столбик
  let indexOfResult = 0;
  let result = new Array(maxH * maxW);
  while (indexOfResult < maxH * maxW) {
    result[indexOfResult] = array[startH][startW];
    visitedPlace[`${startH},${startW}`] = true;
    indexOfResult++;
    let nextH = startH + directions[indexOfDirection][0];
    let nextW = startW + directions[indexOfDirection][1];

    if (
      nextH >= maxH ||
      nextW >= maxW ||
      nextH < 0 ||
      nextW < 0 ||
      visitedPlace[`${nextH},${nextW}`]
    ) {
      if (indexOfDirection === 3) {
        indexOfDirection = 0;
      } else {
        indexOfDirection++;
      }
      nextH = startH + directions[indexOfDirection][0];
      nextW = startW + directions[indexOfDirection][1];
    }
    startH = nextH;
    startW = nextW;
  }
  return result;
}

console.log(spiralTravers(array));
