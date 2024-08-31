function fibonacciSequence(n) {
    let fib = [0, 1]; // Inicializa os dois primeiros números da sequência
    
    // Gera os próximos números da sequência
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib;
}

// Gera os primeiros 10 números da sequência de Fibonacci
const firstTenFibonacci = fibonacciSequence(10);

// Imprime os números
console.log("Os primeiros 10 números da sequência de Fibonacci são:");
for (let i = 0; i < firstTenFibonacci.length; i++) {
    console.log(`${i+1}º número: ${firstTenFibonacci[i]}`);
}