
// Fibonacci Sequence Up to a Given Number

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
