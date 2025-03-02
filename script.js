function showModal(event) {
    let title = "";
    let description = "";
    
    if (event === 'sports') {
      title = "Annual Sports Day";
      description = "Join us for a day filled with sports, competitions, and fun! All students and parents are welcome to participate.";
    } else if (event === 'science') {
      title = "Science Exhibition";
      description = "Explore amazing science projects presented by our students. Witness creativity and innovation in action.";
    } else if (event === 'cultural') {
      title = "Annual Cultural Program";
      description = "Celebrate our school’s culture with performances, music, and dance from students across different grades.";
    }
  
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('eventModal').style.display = "block";
  }
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

  function closeModal() {
    document.getElementById('eventModal').style.display = "none";
  }
  
  // Open Lightbox
function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = "flex";
  }
  
  // Close Lightbox
  function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
  }

  function toggleContent(newsId) {
    const summary = document.getElementById(`news${newsId}-summary`);
    const fullContent = document.getElementById(`news${newsId}-full`);
    const readMoreButton = summary.querySelector('.read-more');
  
    if (fullContent.style.display === "none") {
      fullContent.style.display = "block";
      readMoreButton.textContent = "Read Less";
    } else {
      fullContent.style.display = "none";
      readMoreButton.textContent = "Read More";
    }
  }
  
  
  function toggleBlogContent(blogId) {
    const summary = document.getElementById(`blog${blogId}-summary`);
    const fullContent = document.getElementById(`blog${blogId}-full`);
    const readMoreButton = summary.querySelector('.read-more');
  
    if (fullContent.style.display === "none") {
      fullContent.style.display = "block";
      readMoreButton.textContent = "Read Less";
    } else {
      fullContent.style.display = "none";
      readMoreButton.textContent = "Read More";
    }
  }
  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Thank you for contacting us! We will get back to you shortly.");
    document.getElementById("contact-form").reset(); // Reset form fields after submission
  });
  // Default payment type
let paymentType = "monthly";

// Fee structure for grades
const feeStructure = {
  "1": { monthly: 300, yearly: 3600 },
  "2": { monthly: 320, yearly: 3840 },
  "3": { monthly: 350, yearly: 4200 },
  "4": { monthly: 380, yearly: 4560 },
  "5": { monthly: 400, yearly: 4800 },
  "6": { monthly: 450, yearly: 5400 },
  "7": { monthly: 500, yearly: 6000 },
  "8": { monthly: 550, yearly: 6600 },
  "9": { monthly: 600, yearly: 7200 },
  "10": { monthly: 650, yearly: 7800 },
  "11": { monthly: 700, yearly: 8400 },
  "12": { monthly: 750, yearly: 9000 },
};

function setPaymentType(type) {
  paymentType = type;

  // Remove active class from all buttons
  document.getElementById("monthly-btn").classList.remove("active");
  document.getElementById("yearly-btn").classList.remove("active");
  document.getElementById("due-btn").classList.remove("active");
  document.getElementById(type + "-btn").classList.add("active");

  updateAmount();
}

function updateAmount() {
  let grade = document.getElementById("grade").value;
  let amountField = document.getElementById("amount");

  if (paymentType === "monthly") {
    amountField.value = feeStructure[grade].monthly;
  } else if (paymentType === "yearly") {
    amountField.value = feeStructure[grade].yearly;
  } else {
    amountField.value = ""; // Due amount is manually entered
  }
}

function payWithEsewa() {
  let studentName = document.getElementById("student-name").value;
  let studentID = document.getElementById("student-id").value;
  let amount = document.getElementById("amount").value;

  if (studentName && studentID && amount) {
    alert(`Redirecting to eSewa for ${paymentType} payment...`);
    window.location.href = "https://esewa.com.np"; // Replace with actual eSewa API
  } else {
    alert("Please fill in all fields before proceeding.");
  }
}

function payWithKhalti() {
  let studentName = document.getElementById("student-name").value;
  let studentID = document.getElementById("student-id").value;
  let amount = document.getElementById("amount").value;

  if (studentName && studentID && amount) {
    alert(`Redirecting to Khalti for ${paymentType} payment...`);
    window.location.href = "https://khalti.com"; // Replace with actual Khalti API
  } else {
    alert("Please fill in all fields before proceeding.");
  }
}

// Set default amount when the page loads
window.onload = function() {
  setPaymentType("monthly");
};


function openTab(event, tabName) {
    let tabContents = document.getElementsByClassName("tab-content");
    let tabLinks = document.getElementsByClassName("tab-link");
  
    // Hide all tab content
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
  
    // Remove active class from all buttons
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    // Show the selected tab and highlight the button
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }
  
  function viewResults() {
    alert("Redirecting to the latest results page...");
    window.location.href = "results.html"; // Replace with actual results page
  }
  
  // Set default tab on page load
  window.onload = function() {
    document.getElementById("curriculum").classList.add("active");
  };
  
  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      let details = this.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  });
  document.querySelectorAll(".participate-btn").forEach((button) => {
    button.addEventListener("click", function () {
      alert("Thank you for your interest! The quiz will start soon.");
    });
  });
  const quizData = {
    science: [
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
        { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" }
    ],
    math: [
        { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
        { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
        { question: "What is 15% of 200?", options: ["30", "25", "35", "40"], answer: "30" }
    ],
    history: [
        { question: "Who discovered America?", options: ["Columbus", "Vasco da Gama", "Magellan", "Napoleon"], answer: "Columbus" },
        { question: "Which war ended in 1945?", options: ["WW1", "WW2", "Cold War", "Vietnam War"], answer: "WW2" },
        { question: "Who was the first President of the USA?", options: ["Lincoln", "Washington", "Jefferson", "Roosevelt"], answer: "Washington" }
    ],
    gk: [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
        { question: "Which is the tallest mountain in the world?", options: ["K2", "Everest", "Kilimanjaro", "Makalu"], answer: "Everest" },
        { question: "What is the currency of Japan?", options: ["Dollar", "Yuan", "Yen", "Rupee"], answer: "Yen" }
    ]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;

const quizBox = document.getElementById("quiz-box");
const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score-text");
const retryBtn = document.getElementById("retry-btn");

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        currentCategory = this.dataset.category;
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        quizBox.classList.remove("hidden");
        scoreBox.classList.add("hidden");
    });
});

function loadQuestion() {
    const question = quizData[currentCategory][currentQuestionIndex];
    quizTitle.innerText = currentCategory.toUpperCase() + " Quiz";
    questionText.innerText = question.question;
    optionsDiv.innerHTML = "";
    
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = quizData[currentCategory][currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData[currentCategory].length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizBox.classList.add("hidden");
    scoreBox.classList.remove("hidden");
    scoreText.innerText = `You scored ${score} out of ${quizData[currentCategory].length}!`;
}

retryBtn.addEventListener("click", () => {
    quizBox.classList.add("hidden");
    scoreBox.classList.add("hidden");
});
    