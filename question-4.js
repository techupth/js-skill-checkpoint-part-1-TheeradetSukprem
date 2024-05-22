// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let min = inventory [0];
for (const product of inventory) {
  if (product.quantity < min.quantity) {
    min = product;
  }
}

console.log(min);
console.log(min.quantity);
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ`+ " " + min.name + " " + 'ซึ่งมี' + " " + min.quantity + " " + 'ชิ้น' );