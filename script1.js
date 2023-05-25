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

// Proframe  no 2 -------------------------------------->
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

// programe no 3 -----------------------------------------

function startCountdown() {
	var hours = parseInt(document.getElementById("hours").value);
	var minutes = parseInt(document.getElementById("minutes").value);
	var seconds = parseInt(document.getElementById("seconds").value);

	var totalSeconds = hours * 3600 + minutes * 60 + seconds;

	var countdown = setInterval(function() {
	if (totalSeconds <= 0) {
			clearInterval(countdown);
			alert("Countdown complete!");
			return;
		}

		var hoursRemaining = Math.floor(totalSeconds / 3600);
		var minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
		var secondsRemaining = totalSeconds % 60;

		document.getElementById("countdown").innerHTML = hoursRemaining + "h " + minutesRemaining + "m " + secondsRemaining + "s";

		totalSeconds--;
	}, 1000);
}

// programe no 4-----------------------------
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
















