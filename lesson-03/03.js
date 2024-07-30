// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let m = 0
    if (a > b) {
        m = a
    } else {
        m = b
    }

    if (m > c) {
        return m
    } return c
  }

  const largestNum = findLargest(5, 145, 10) 
