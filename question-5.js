// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let allTotalProducts = products.reduce((arr,products)=> {
  return arr + (products.price * products.quantity);
},0)

console.log(allTotalProducts);

function calculateTotalPrice(products,promotionCode) {
  if (promotionCode === "SALE50") {
    return products * (1 - 0.50)
  } else if (promotionCode === "SALE20") {
    return products * (1 - 0.20)
  } else {
    return products
  }
}
console.log(calculateTotalPrice(85,"SALE50"));


console.log(calculateTotalPrice(allTotalProducts,"SALE50"));
console.log(calculateTotalPrice(allTotalProducts,"SALE20"));
console.log(calculateTotalPrice(allTotalProducts,""));


// ทำไม่ทันครับแต่ที่คิดเอาไว้คืือการเอา reduce มาหาผลรวมของสินค้าก่อน อ้างจากข้อ 2 ครับถ้าไม่ใช้ reduce จะเขียนยาวมากๆ
// จากนั้นใช้ If-Else กำหนดเงินไขตามโจทย์ให้ใช้ส่วนลดครับ 