// Synchronous code in JS

// Sleep function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
    currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

console.log('started')
sleep(1000)
console.log('done sleeping')
console.log('bye')