let arr = ["a", "b"];

arr.push(function () {
  console.log(this.toString());
});

arr[2]();
