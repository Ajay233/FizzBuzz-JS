describe('FizzBuzz', function(){

  var fizzbuzz

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and 5', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(1)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and returns Fizz', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzBuzzer(3)).toEqual("Fizz");
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5 and returns Buzz', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzBuzzer(5)).toEqual("Buzz");
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5 and returns FizzBuzz', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzBuzzer(15)).toEqual("FizzBuzz");
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5 and returns the number', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzBuzzer(1)).toEqual(1);
    });
  });
});
