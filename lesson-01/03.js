/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let count = 1;

while (count < 20) {
  sum = sum + count;
  count = count + 2;
  console.log("count:", count, "sum:", sum);
}

console.log(sum);