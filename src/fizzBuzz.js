var FizzBuzz = function(){};

fizzbuzz = new FizzBuzz();

FizzBuzz.prototype.isDivisibleByThree = function(number){
  return (number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number){
  return (number % 5 === 0);
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number){
  return (number % 3 === 0 && number % 5 === 0);
};

FizzBuzz.prototype.fizzBuzzer = function(number){
  if (fizzbuzz.isDivisibleByThreeAndFive(number)) {
    return "FizzBuzz";
  } else if (fizzbuzz.isDivisibleByFive(number)){
    return "Buzz";
  } else if (fizzbuzz.isDivisibleByThree(number)) {
    return "Fizz"
  } else {
    return number
  }
};
