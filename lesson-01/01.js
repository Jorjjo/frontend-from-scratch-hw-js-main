// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let count = 0;

while (count < 20) {
  count = count + 1;
  sum = sum + count;
  console.log("count:", count, "sum:", sum);
}

console.log(sum);
  