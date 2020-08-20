describe('Replace With', function() {
	it('return error if arguments are not string', function() {
		expect(replaceWith([], 1, 3)).toEqual('Arguments must be string');
	});
	it('returns a String', function() {
		expect(typeof(replaceWith("awesome", "e", "z"))).toEqual('string');
	});
	it('replace with string argument passed', function() {
		expect(replaceWith("awesome", "e", "z")).toEqual('awzsomz');
	});
	it('replace with string argument passed', function() {
		expect(replaceWith("Foo", "F", "B")).toEqual('Boo');
	});
});


describe('Expand', function () {
	it('returns an array', function() {
		expect(expand([1, 2, 3], 2)).toEqual(jasmine.any(Array));
	});

	it('returns error if arguments are not array and integer', function() {
		expect(expand("adsaddf", 'e')).toEqual('Arguments must be array and an integer')
	});

	it('expand arrays based on the argument passed', function() {
		expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
	});
	it('expand arrays based on the argument passed', function() {
		expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"])
	});
});

describe('Accept Numbers Only', function() {
	it('returns a boolean', function() {
		expect(acceptNumbersOnly(2, 3)).toEqual(jasmine.any(Boolean));
	});
	it('returns false if string is passed as a parameter', function () {
		expect(acceptNumbersOnly(1, 'foo')).toBeFalse();
	});
	it('returns true if the parameter passed are all numbers', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toBeTrue();
	});
	it('returns false if the parameter contained NaN', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toBeFalse();
	});
});

describe('Merge Array', function () {
	it('must return an array', function() {
		expect(mergeArrays([1, 2, 3],[1, 5, 6])).toEqual(jasmine.any(Array))
	});

	it('merge arrays of parameter passed', function() {
		expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
	});
});

describe('Merge Objects', function () {
	it('returns an object', function() {
		expect(mergeObjects(obj1, obj2)).toEqual(jasmine.any(Object))
	});
	it('return a merged Object', function() {
		expect(mergeObjects(obj1, obj2)).toEqual({
		    name: "Foo",
		    test: "thing",
		    num: 55
		});
	});
});