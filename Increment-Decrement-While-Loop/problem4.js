let i = 1;
let Sum = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    Sum = Sum + i;
    i = i + 2
  }
  i++
}

let averageOfEvenNumbers = Sum / 2;
console.log(averageOfEvenNumbers);