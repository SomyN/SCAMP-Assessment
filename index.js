// This is a function to output the Fibonacci sequence of a given number

function fibonacciRecursive(a, b, counter, len) {
    if (counter <= len) {
        console.log(a);
        fibonacciRecursive(b, a + b, counter + 1, len);
    }
}

fibonacciRecursive(0, 1, 1, 20);

