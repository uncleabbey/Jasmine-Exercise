function replaceWith (word, letter, replaceLetter) {
	if (typeof(word)  !== 'string' || typeof(letter)  !== 'string' || typeof(replaceLetter)  !== 'string') {
		return 'Arguments must be string'
	}

	// convert word to array
	var wordArr = word.split("");


	wordArr.forEach((item, index) => {
		if (item === letter) {
			wordArr.splice(index, 1, replaceLetter)
		}
	});
	return wordArr.join("");
};



function expand (arr, num) {
	if(typeof(arr) !== 'object' || typeof(num) !== 'number') {
		return 'Arguments must be array and an integer'
	} 
	var newArr = [];
	for (var i = 0; i < num; i++) {
		newArr = newArr.concat(arr);
	}
	return newArr;
}

function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) {
			return false;
		} 
		if(typeof(arguments[i]) !== 'number') {
			return false;
		} 
	};
	return true;
};


function mergeArrays (arr1, arr2) {
	return arr1.concat(arr2).sort()
}

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}


function mergeObjects (obj1, obj2) {
	var newObj = {...obj1, ...obj2};
	return newObj;
}