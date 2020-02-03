let a = 5;
let b = 7;
let znak = 'pow';
switch (znak) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    case '%':
        console.log(a % b);
        break;
    case 'pow':
        console.log(Math.pow(a,b));
        break;
}