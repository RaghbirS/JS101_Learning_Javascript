function problem1(n) {
  let current_num = 0;
  let sum = 0;
  let previous_sum = 0;
  while (current_num <= n) {
    previous_sum = sum;
    sum = current_num + previous_sum;
    current_num = current_num + 1
  }
  console.log(sum)
}


problem1(4);
problem1(7);
problem1(9);