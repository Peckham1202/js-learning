function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

// 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);

// 调用函数之后
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
