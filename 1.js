const numbers = [5, 10, 15, 20, 25];

// a) ยกกำลังสองทุกตัว
const squaredNumbers = numbers.map(n => n * n);
console.log("Squared:", squaredNumbers);

// b) เลือกเฉพาะเลขคู่
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even:", evenNumbers);

// c) หาผลรวมทั้งหมด
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);
