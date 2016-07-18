describe('calculator', function () {

	describe('Addition', function () {
		it('Should add two numbers', function () {
			expect(sum(1,2)).toEqual(3);
		});
	});

	describe('Substraction', function () {
		it('Should substract two numbers', function () {
			expect(substraction(4,2)).toEqual(2);
		});

		it('Should return "Error" if negative value', function (){
			expect(substraction(2,4).toEqual('Error'));
		});
	});

	describe('Multiplication', function () {
		it('Should multiply two numbers', function () {
			expect(multiplication(10, 10)).toEqual(100);
		});
	});

	describe('Addition', function () {
		it('Should divide two numbers', function () {
			expect(division(6,3)).toEqual(2);
		});

		it('Should return and error if you divide by zero', function () {
			expect(division(6, 0)).toEqual('Error, cannot divide by zero');
		});
	});
});