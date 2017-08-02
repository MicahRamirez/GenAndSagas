/**
 * Credits to Formidable Labs for this example
 */
function* smileyGenerator() {
  // yields the value "HAPPY"
  console.log(yield "HAPPY"); // console.log(':)') ,...,
  console.log(yield "SAD");
  console.log(yield "I HAVE OTHER EMOTIONS TOO, Y'KNOW");
}

function getSmiley(value) {
  switch (value) {
    case "HAPPY": {
      return ":)";
    }
    case "SAD": {
      return ":(";
    }
    default: {
      return ": |";
    }
  }
}

function run(iter) {
  let smiley;
  // Run the generator until the first `yield` statement
  let { value, done } = iter.next(); // destructures the generator object

  while (!done) {
    smiley = getSmiley(value);  // :) :( 
    ({ value, done } = iter.next(smiley)); // :) :(
  }
}

run(smileyGenerator());