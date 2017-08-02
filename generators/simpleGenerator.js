
/**
 * Simple Generator Example
 */

// Generator FUNCTION
function* simple(value) {
	yield value * 1;
	yield value * 2;
	yield value * 3;
}

// Generator OBJECT <=> Iterator
let generatorObj = simple(2);

/**
 * We should expect console output of
 * {value: 2, done: false}
 * 4
 * 6
 * undefined
 */
console.log(generatorObj.next());
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);


/**
 * We can also use generators in for...of loops
 * Expected console output of 
 */
for(let value of simple(3)) {
	console.log(value);
}

/**
 * Eagerly computes simple result 
 * 4 8 12
 */
console.log(...simple(4));
