const numberInput = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

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

convertBtn.addEventListener('click', () => {
  const number = Number(numberInput.value);

  if (isNaN(number)) {
    output.innerHTML = `<span>Please enter a valid number</span>`
  } else if (number < 1) {
    output.innerHTML = `<span>Please enter a number greater than or equal to 1</span>`
  } else if (number > 3999) {
    output.innerHTML = `<span>Please enter a number less than or equal to 3999</span>`
  } else {
    output.innerHTML = `<span>${convertToRoman(number)}</span>`
  }
})
