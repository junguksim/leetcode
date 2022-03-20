// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
  let result = 0;
  const romanToIntDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = 0;
  while (i < s.length) {
    const roman = s[i];
    console.log(roman);
    const romanInt = romanToIntDict[roman];
    if (i === s.length - 1) {
      result += romanInt;
      break;
    }
    const nextRoman = s[i + 1];
    const nextRomanInt = romanToIntDict[nextRoman];
    if (romanInt >= nextRomanInt) {
      result += romanInt;
      i++;
    } else {
      result += nextRomanInt - romanInt;
      i += 2;
    }
  }
  return result;
}

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");
