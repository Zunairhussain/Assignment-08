function checkStrength() {
    var password = document.getElementById("password").value;
    var strengthchecker = document.getElementById("result");
    var strength = 0
    
// check length
if (password.length >= 8) {
  strength  += 1;   
}

// check special character
var specialCharacter = !@#$%^&*();
     if (specialCharacter.test(password)) {
    strength += 1;
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
         strengthMeter.style.color = "blue";
     } else {
         strengthMeter.textContent = "Strong";
         strengthMeter.style.color = "Black";
     }
}

// Programe no 03 --------------------
 var image = [
    https:www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614200179396-2bdb77ebf81b%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=4iBOSJJwQKB_uM&vet=12ahUKEwiT_YqvoYP_AhXQkicCHalzAgsQMygUegUIARCOAg..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-car&docid=4L2wGiWfqhPeKM&w=1000&h=562&q=cars%20pics&hl=en&ved=2ahUKEwiT_YqvoYP_AhXQkicCHalzAgsQMygUegUIARCOAg
    https:www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.motor1.com%2Fimages%2Fcustom%2F2022_08_bugatti-w16-mistral-10.jpg&tbnid=26RLga2orh-SkM&vet=12ahUKEwiT_YqvoYP_AhXQkicCHalzAgsQMygjegUIARCxAg..i&imgrefurl=https%3A%2F%2Fblog.dupontregistry.com%2Ffeatures%2F643420%2Ftop-25-most-expensive-cars%2F&docid=kMr5-uIlxSZPMM&w=1400&h=788&q=cars%20pics&hl=en&ved=2ahUKEwiT_YqvoYP_AhXQkicCHalzAgsQMygjegUIARCxAg
    https:www.google.com/imgres?imgurl=https%3A%2F%2Fstrapiadmin.360websitedemo.com%2Fuploads%2Fsf90_p_5_8bb83dfe5a.jpg%3Fw%3D1200%26q%3D75&tbnid=ipVuOD8iyCcSqM&vet=10CEQQMyiGAWoXChMIuKqjr6GD_wIVAAAAAB0AAAAAEBA..i&imgrefurl=https%3A%2F%2Ff1rstmotors.com%2F&docid=S_Pc3CR25MhWkM&w=796&h=498&q=cars%20pics&hl=en&ved=0CEQQMyiGAWoXChMIuKqjr6GD_wIVAAAAAB0AAAAAEBA
    https:www.google.com/imgres?imgurl=https%3A%2F%2Ff7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com%2FC2299%2FU1666%2FIMG_92497-mini.jpg&tbnid=UtPevzTtX-HmYM&vet=10CNEBEDMowAFqFwoTCLiqo6-hg_8CFQAAAAAdAAAAABAQ..i&imgrefurl=https%3A%2F%2Fwww.romansinternational.com%2F&docid=yhCch_hMKpqFQM&w=480&h=360&q=cars%20pics&hl=en&ved=0CNEBEDMowAFqFwoTCLiqo6-hg_8CFQAAAAAdAAAAABAQ

]
var currentIndex = 0;
var imageElement = document.getElementById("image");

// Function to display the current image
function displayImage() {
    imageElement.src = imageUrls[currentIndex];
}

// Function to move to the previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageUrls.length - 1;
    }
    displayImage();
}

// Function to move to the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
    }
    displayImage();
}

// Initial display
displayImage();

















}