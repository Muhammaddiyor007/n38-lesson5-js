
function power(a, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= a;
    }

    return result;
}

// Test qilish
let base = 2;  // O'zlashtirilayotgan son
let exponent = 3;  // Daraja
let result = power(base, exponent);

console.log($(base)-ning,$(exponent)-darajasi, $(result));