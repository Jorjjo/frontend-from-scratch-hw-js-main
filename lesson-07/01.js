'use strict'

/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let strArr = str.split(" ");
  let newStrArr = [];
  // console.log(strArr);
  for (const el of strArr) {
    const newEl = el[0].toUpperCase() + el.slice(1);
    newStrArr.push(newEl);
  }
  return newStrArr.join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
console.log(capitalizeWords("a"));

// function cW2(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (i !== 0 && str[i - 1] !== " ") {
//       continue;
//     }
//   }

// }

// cW2("hello world from javascript");
