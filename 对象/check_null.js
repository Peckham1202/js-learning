function isEmpty(obj) {
  let keys = Object.keys(obj);
  return keys.length === 0;
}

function isEmpty2(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "oo" }));
