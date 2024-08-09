/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. 
Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

// 1. Массив
// 2. Цикл for

function includesElement(array, element) {
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    // console.log(element, i, array[i]);

    if (element === array[i]) {
      return true;
    }
  }
  
  return false;
}

const result = includesElement([4, 8, 15, 16, "cat", 23, 42], "cat");
console.log(result);
