// const anagrams = (str1, str2) => {
//   let firstWord = [...str1];
//   let secondWord = [...str2];

//   for (let i = 0; i < firstWord.length; i++) {
//     for (let j = 0; j < secondWord.length; j++) {
//       if (firstWord[i] === secondWord[j]) {
//         firstWord.splice(i, 1);
//         secondWord.splice(j, 1);
//       }
//     }
//   }

//   // console.log(firstWord);
//   if (firstWord.length == 0 && secondWord.length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function anagrams(a, b) {
//   let arrStrOne = a.toLowerCase().split('').sort().join('');
//   let arrStrTwo = b.toLowerCase().split('').sort().join('');

//   if (arrStrOne == arrStrTwo) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(anagrams('fRiend', 'finde'));
// Pseudocode
// 1. Check if the length of both strings are the same or not.

// 2. Check if the character and the number of times the appear are the same in both str.

function anagrams(strOne, strTwo) {
  // regex expression to match all
  // non-alphanumeric characters in string
  const regex = /[^A-Za-z0-9]/g;
  let arrStrOne = strOne
    .replace(regex, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let arrStrTwo = strTwo
    .replace(regex, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  console.log(arrStrOne, arrStrTwo);
  if (arrStrOne == arrStrTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(anagrams('O, Draconian devil', 'Leonardo da Vinci'));
