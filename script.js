
function min(number) {
  let numArr = [-50, 30, 44, 6, -455, 130, 55, 45, -37, 66];

  let longNumArr = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < longNumArr) {
      longNumArr = numArr[i];
    }
  }

  return longNumArr;
}

let resultMinNum = min();

console.log(resultMinNum);