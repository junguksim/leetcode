/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  for (const bracket of s) {
    if (stack.length === 0) stack.push(bracket);
    else {
      if ((stack[stack.length - 1] === "(" && bracket === ")") || (stack[stack.length - 1] === "[" && bracket === "]") || (stack[stack.length - 1] === "{" && bracket === "}")) stack.pop();
      else {
        stack.push(bracket);
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid("{[]}"));
