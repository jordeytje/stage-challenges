// Fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        addVal(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        addVal(`${i} Fizz`);
    } else if (i % 5 === 0) {
        addVal(`${i} Buzz`);
    } else {
        addVal(i);
    }
}

function addVal(val) {
    const outputElem = document.querySelector('.output');
    const elem = document.createElement('p');
    elem.innerHTML = val;
    outputElem.append(elem)
}