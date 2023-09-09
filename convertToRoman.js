function convertToRoman(num) {
  const romanToArabic = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let str = '';

  while (num > 0) {
    for (let key of Object.keys(romanToArabic)) {
      while (num >= romanToArabic[key]) {
        str += key;
        num -= romanToArabic[key];
      }
    }
  }

  return str;
}
