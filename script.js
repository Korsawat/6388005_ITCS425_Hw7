function calBell() {
    const n = parseInt(document.getElementById('n').value);
    const result = bell(n);
    document.getElementById('result').textContent = result;
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    let fact = 1;
    for (let i = 1; i <= x; i++) {
        fact *= i;
    }
    return fact;
}

function bell(n) {
    const bellNumbers = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += factorial(i - 1) / (factorial(j) * factorial(i - 1 - j)) * bellNumbers[j];
        }
        bellNumbers.push(sum);
    }
    return bellNumbers[n - 1];
}

document.getElementById('n').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calBell();
    }
});
