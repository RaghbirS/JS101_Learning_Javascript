for (let num = 3; num <= 30; num++) {
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result = false;
    }
  }
  if (result == true   ) {
    console.log(num)
  }
}