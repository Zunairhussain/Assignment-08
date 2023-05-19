function checkPasswordStrength() {
    var password = document.getElementById("password")
    var strengthchecker = document.getElementById("result")
    var strength = 0
    
// check length
if (password.length >= 8) {
  strength  += 3;   
}

// check special character
var specialCharacter = ?/>.<,:;""'|\][!@#$%^&*()-_+=~`;
if (specialCharacter.test(password)) {
    strength += 1;
    
}
























}