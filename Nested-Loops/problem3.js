for (let i = 1; i <= 10; i++) {
  let qwer = ""
  for (let j = 1; j <= 10; j++) {
    if (i == 1 || i == 10) {
      qwer += "*"
    }
    else {
      if (j == 1 || j == 10) {
        qwer = qwer + "*"
      }
      else {
        qwer = qwer + " "
      }
    }
  }
  console.log(qwer)
}