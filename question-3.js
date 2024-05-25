// Question #3
let userPasswordStorong = checkPasswordStrength("swnalWadqQ");
let userPasswordTechUp = checkPasswordStrength("TechUp");
let userPasswordWeak = checkPasswordStrength("abcde");
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) { 
    if (userPassword.length < 6) {
    return "weak";
}   else if (userPassword.length >= 6 && userPassword.length < 10) {
    return "Medium";
}   else (userPassword.length >= 10) 
    return "Storng";
}

console.log(userPasswordStorong);
console.log(userPasswordTechUp);
console.log(userPasswordWeak);
