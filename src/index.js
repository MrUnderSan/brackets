module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arr = [];
  let similarArr = [];
  let obj = {};

  function openBracketsArr(bracketsConfigMatrix) {
    for (let i = 0; i < bracketsConfigMatrix.length; i++) {
      arr.push(bracketsConfigMatrix[i][0]);
    }
    return arr;
  }

  function similarBracketsArr(bracketsConfigMatrix) {
    for (let i = 0; i < bracketsConfigMatrix.length; i++) {
      if (bracketsConfigMatrix[i][0] === bracketsConfigMatrix[i][1]) {
        similarArr.push(bracketsConfigMatrix[i][0]);
      }
    }
    return similarArr;
  }

  function makeBracketsObjects(bracketsConfigMatrix) {
    for (let i = 0; i < bracketsConfigMatrix.length; i++) {
      obj[bracketsConfigMatrix[i][1]] = bracketsConfigMatrix[i][0];
    }
    return obj;
  }

  openBracketsArr(bracketsConfig);
  similarBracketsArr(bracketsConfig);
  makeBracketsObjects(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (
      similarArr.includes(str.slice(i, i + 1)) &&
      similarArr.includes(str.slice(i, i + 1)) ===
        stack.includes(str.slice(i, i + 1))
    ) {
      stack.pop();
    } else if (arr.includes(str.slice(i, i + 1))) {
      stack.push(str.slice(i, i + 1));
    } else if (stack.slice(-1) == obj[str.slice(i, i + 1)]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
