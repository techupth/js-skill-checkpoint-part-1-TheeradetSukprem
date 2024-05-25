// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี
inventory[0].quantity = 200 ;

inventory.push ({
 name: "Orange", price : 20 , quantity:300 
});

let allTotalFruitsReduce = inventory.reduce((acc,inventory) => {
  return acc + (inventory.price * inventory.quantity)
},0)
console.log(allTotalFruitsReduce);


let totalApple = inventory[0].price * inventory[0].quantity 
let totalBanana = inventory[1].price * inventory[1].quantity 
let totalOreange = inventory[2].price * inventory[2].quantity 
let allTotalFruits = totalApple + totalBanana + totalOreange
console.log(allTotalFruits);

console.log(totalApple);
console.log(totalBanana);
console.log(totalOreange);
  console.log('มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก'+ ' ' + allTotalFruits + ' ' +'บาท');

  // มันมีวิธีที่สั้นกว่านี้แต่ผมคิดไม่ทันเลยเอาวิธีที่ง่ายที่สุดครับ  (ใช่้ reduce)