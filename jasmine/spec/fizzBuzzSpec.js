describe("fizzBuzz", function() {

	describe('returns', function() {
		it('fizz when number is divisible by 3', function() {
			var fizzBuzz = new FizzBuzz();
			expect(fizzBuzz.play(3)).toEqual("fizz")
		});
		it('buzz when number is divisible by 5', function() {
			var fizzBuzz = new FizzBuzz();
			expect(fizzBuzz.play(5)).toEqual("buzz")
		});
	});


})