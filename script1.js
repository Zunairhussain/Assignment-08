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

// Proframe  no 2 ------------------------------------------------------------>
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

// programe no 3 ------------------------------------------------------

var countdownInterval;
var countdownElement = document.getElementById("countdown");
var hoursInput = document.getElementById("hoursInput");
var minutesInput = document.getElementById("minutesInput");
var secondsInput = document.getElementById("secondsInput");

function startCountdown() {
    var hours = parseInt(hoursInput.value);
    var minutes = parseInt(minutesInput.value);
    var seconds = parseInt(secondsInput.value);

    var totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert("Please enter a valid countdown time.");
        return;
    }

    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;

    countdownInterval = setInterval(function() {
        totalSeconds--;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Countdown finished!";
            alert("Countdown finished!");
        } else {
            var remainingHours = Math.floor(totalSeconds / 3600);
            var remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
            var remainingSeconds = totalSeconds % 60;

            countdownElement.textContent = formatTime(remainingHours) + " : " +
                                            formatTime(remainingMinutes) + " : " +
                                            formatTime(remainingSeconds);
        }
    }, 1000);
}

function formatTime(time) {
    return time.toString().padStart(2, "0");
}

// programe no 4-------------------------------------------------
var flashcards = [
    {
        question: "What is the capital of Pakistan?",
        answer: "Islamabad"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What is your name?",
        answer: "Zunair"
    },
    {
        question: "Who is the president of Pakistan?",
        answer: "Araf Ali "
    }
];

// Current card index
var currentCard = 0;

displayCard();

// Event listener for the flip button
var flipButton = document.getElementById("flip-button");
flipButton.addEventListener("click", function() {
    var card = document.getElementById("card");
    var answer = document.getElementById("answer");
    if (answer.style.display === "none") {
        card.style.transform = "rotateY(180deg)";
        answer.style.display = "block";
    } else {
        card.style.transform = "rotateY(0deg)";
        answer.style.display = "none";
    }
});

// Event listener for the next button
var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function() {
currentCard++;
    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }
    displayCard();
});

// Function to display the current card
function displayCard() {
    var card = document.getElementById("card");
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    question.innerHTML = flashcards[currentCard].question;
    answer.innerHTML = flashcards[currentCard].answer;
    answer.style.display = "none";
    card.style.transform = "rotateY(0deg)";
}

// program no 5------------------------------------------------------------------


var words = ["javascript", "programming", "computer", "algorithm", "variable", "function"];

var randomIndex = Math.floor(Math.random() * words.length);
var word = words[randomIndex];

// Scramble the letters in the word
let scrambledWord = "";
for (let i = 0; i < word.length; i++) {
  const randomIndex = Math.floor(Math.random() * word.length);
  scrambledWord += word[randomIndex];
}

// Display the scrambled word to the user
alert("The scrambled word is: " + scrambledWord);


var guess = prompt("Enter your guess:");

// Check if the guess is correct
if (guess === word) {
  alert("Congratulations, you unscrambled the word!");
} else {
  alert("Sorry, that's incorrect. The word was: " + word);
}











