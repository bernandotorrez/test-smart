const findPuzzle = '307237 - 769058';
const splitPuzzle = findPuzzle.split(' - ');
const start = parseInt(splitPuzzle[0]);
const end = parseInt(splitPuzzle[1]);

function noDecrease(numbers) {
  return numbers.split('').every((digit, index) => index === 0 || digit >= numbers[index - 1]);
}

function hasGroupOfTwo(numbers) {
  const check = numbers.split('').map((value, index) => {
    let tempNumber = numbers[index-1] == undefined ? '' : numbers[index-1]
    return value == tempNumber
  })

  return check.includes(true)
}

function isCandidate(numbers) {
  return hasGroupOfTwo(numbers) && noDecrease(numbers);
}

let validCount = 0;
for (let numbers = start; numbers <= end; numbers++) {
  validCount += isCandidate(numbers.toString());
}

console.log(validCount);
