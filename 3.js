const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Mouse', price: 20 },
  { id: 3, name: 'Keyboard', price: 50 },
  { id: 4, name: 'Monitor', price: 150 }
];

const totalPrice = products
  .filter(p => p.price < 100)        // เลือกราคาน้อยกว่า 100
  .map(p => p.price * 2)             // เพิ่มราคาเป็น 2 เท่า
  .reduce((sum, price) => sum + price, 0); // รวมราคาทั้งหมด

console.log("Total price:", totalPrice);
