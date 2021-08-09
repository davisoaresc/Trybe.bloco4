function inverterString(str) {
  var o = "";
  for (var i = str.length - 1; i >= 0; i--) {
    o += str[i];
  }
  if (o == str) {
    return true;
  } else {
    return false;
  }
}
console.log(inverterString("arara"));
