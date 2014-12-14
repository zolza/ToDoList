function fizzbuzz (fizz) {
  if (fizz%5==0 && fizz%3==0) {
    console.log("fizzbuzz");
  }
  else if (fizz%3==0) {
    console.log("fizz");
  }
  else if (fizz%5==0) {
    console.log("buzz");
  }
  else {
    console.log(fizz);
  }
};
