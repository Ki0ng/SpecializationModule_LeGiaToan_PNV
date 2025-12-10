function calc (a: number, b: number, op: '+' | '-' | '*' | '/') {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case "/":
            if (b == 0) {
                return "khong the chia cho 0"
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

console.log(calc(2, 6, "*"));