module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arr = [];
  let obj = {};

  function openBracketsArr(bracketsConfigMatrix) {
    for (let i = 0; i < bracketsConfigMatrix.length; i++) {
      arr.push(bracketsConfigMatrix[i][0]);
    }
    return arr;
  }

  function makeBracketsObjects(bracketsConfigMatrix) {
    for (let i = 0; i < bracketsConfigMatrix.length; i++) {
      obj[bracketsConfigMatrix[i][1]] = bracketsConfigMatrix[i][0];
    }
    return obj;
  }

  openBracketsArr(bracketsConfig);
  makeBracketsObjects(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (stack.slice(-1) == obj[str.slice(i, i + 1)]) {
      stack.pop();
    } else if (arr.includes(str.slice(i, i + 1))) {
      stack.push(str.slice(i, i + 1));
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
