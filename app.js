// ? Task:Дана строка, как написать функцию, которая возвращает значение true, если строка — палиндром, и false, если это не так?

// Solution 1

// const palindrome = (str) => {
// Меняем регистр строки на нижний
//   str = str.toLowerCase();
// Переворачиваем строку и возвращаем результат сравнения
//   return str === str.split("").reverse().join("");
// };
const palindrome = str =>
  str.toLowerCase().trim() ===
  str.toLowerCase().trim().split("").reverse().join("");


console.log(`Is this word 'Level' a polyyndrome -  ${palindrome("Level")}`);//true
console.log(`Is this word 'Peep' a polyyndrome -  ${palindrome("Peep")}`);//true
console.log(`Is this word 'Nun' a polyyndrome -  ${palindrome("Nun")}`);//true
console.log(`Is this word 'Noon' a polyyndrome -  ${palindrome("Noon")}`);//true
console.log(`Is this word 'After' a polyyndrome -  ${palindrome("After")}`);//false

// ! Explanation:
// Эта задача строится на идее перевернуть строку задом наперёд. Если обратная строка совпадает с исходной, то это палиндром, и функция должна вернуть значение true. И наоборот, если обратная строка не совпадает с исходной, функция должна вернуть значение false.

// Начните с преобразования символов входной строки в символы нижнего регистра. Поскольку вы собираетесь сравнивать каждый символ исходной строки с символами перевёрнутой строки, единый регистр гарантирует, что сравнение будет сосредоточено лишь на сравнении самих символов.

// Далее переворачиваем исходную строку. Это можно сделать, преобразовав строку в массив с помощью метода .split() (библиотека String), затем перевернув массив методом .reverse() (библиотека Array) и, наконец, преобразовав обратный массив снова в строку с помощью метода .join() (библиотека Array).
//trim()  удаляет пробельные символы с начала и конца строки.
// Остаётся сравнить перевёрнутую строку с исходной и вернуть результат в виде true или false.