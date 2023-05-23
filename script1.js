function checkPasswordStrength() {
    var password = document.getElementById("passwordInput").value;
    var strengthMeter = document.getElementById("result");
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check special characters
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(password)) {
        strength += 1;
    }

    // Check uppercase letters
    var uppercaseChars = /[A-Z]+/;
    if (uppercaseChars.test(password)) {
        strength += 1;
    }

    // Check lowercase letters
    var lowercaseChars = /[a-z]+/;
    if (lowercaseChars.test(password)) {
        strength += 1;
    }

    // Check numbers
    var numbers = /[0-9]+/;
    if (numbers.test(password)) {
        strength += 1;
    }

    // Display the strength rating
    if (strength === 0) {
        strengthMeter.textContent = "Weak";
        strengthMeter.style.color = "red";
    } else if (strength <= 2) {
        strengthMeter.textContent = "Medium";
        strengthMeter.style.color = "orange";
    } else {
        strengthMeter.textContent = "Strong";
        strengthMeter.style.color = "green";
    }
}

// Proframe  no 3 -------------------------------------->
var imageUrls = [
    "./pics/b4.jpg",
    "./pics/f1.jpg",
    "./pics/f2.jpg",
];
var currentValue = 0;

var imageElement = document.getElementById("image");

function displayImage() {
    imageElement.src = imageUrls[currentValue];
}

function prevImage() {
    currentValue--;
    if (currentValue < 0) {
        currentValue = imageUrls.length - 1;
    }
    displayImage();
}

// Function to move to the next image
function nextImage() {
    currentValue++;
    if (currentValue >= imageUrls.length) {
        currentValue = 0;
    }
    displayImage();
}

// Initial display
displayImage();
