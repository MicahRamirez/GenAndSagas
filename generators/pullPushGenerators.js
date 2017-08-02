/**
 * PULL/PUSH example
 */
function* foo() {
	let x = yield 'Good Morning!';
	yield x;
}

let fooIterator = foo();
console.log(fooIterator.next().value); // yields Good Morning (PULL)
console.log(fooIterator.next('Good Evening').value); // yields Good Evening (PUSH'ed Good Evening into x)

let barIterator = foo();
console.log(barIterator.next().value); // yields Good Morning
console.log(barIterator.next().value); // yields undefined

/**
 * Stretching our iterator knowledge!
 * What would be the output of advanced(2)
 */
function* advanced(x) {
	let y = yield (2 * x);
	let z = yield ((y + 2) / 2);
	yield (y + z + x);
}

let advancedIterator = advanced(2);
console.log(advancedIterator.next().value); // 4
console.log(advancedIterator.next(2).value); // 2 
console.log(advancedIterator.next(3).value); // 7