//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let i = 0;
  let result = "";
  while (i < 200) {
    let prevS = "";
    for (const str of strs) {
      const s = str[i];
      if (!s) return result;
      if (prevS === "") prevS = s;
      else if (prevS !== s) {
        return result;
      }
    }
    result += prevS;
    i++;
  }
  return result;
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix(["", ""]);
