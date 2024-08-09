/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
  let array = str.split("");
  console.log(array);

//   let result = [...array];
//   result.forEach((el, id) => {
//     result[id] = `${el}${el}`;
//   });
  const result = array.map((el) => el + el);
  console.log(result);

  array = result.join("");
  console.log(array);

  return array;
}

const result = doubleEachCharacter("hello");
console.log(result);
