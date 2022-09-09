let str = "loops";
let arr = [...str]
let a = 1;
let object = {

}
for (let i = 0; i < arr.length; i++) {
  object[arr[i]] = 0;
}
for (let i in object) {

  for (let j = 0; j < str.length; j++) {
    if (i == str[j]) {
      object[i] = object[i] + 1
    }
  }
}
console.log(object);