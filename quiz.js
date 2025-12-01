// Simple JavaScript Quiz Game (Console Version)

// Array of quiz questions and answers
const quizData = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who wrote the Harry Potter series?", answer: "j.k. rowling" }
];

// Function to run the quiz
function startQuiz() {
    let score = 0; // Track user score

    alert("Welcome to the Quiz Game! Answer the questions in the prompts.");

    // Loop through all questions
    for (let i = 0; i < quizData.length; i++) {
        let userAnswer = prompt(quizData[i].question);

        // If user cancels prompt
        if (userAnswer === null) {
            alert("You exited the quiz early.");
            return;
        }

        // Clean the input (lowercase + trim)
        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizData[i].answer) {
            alert("Correct! ✅");
            score++;
        } else {
            alert("Incorrect ❌\nCorrect answer: " + quizData[i].answer);
        }
    }

    // Final score output
    alert("Quiz Complete!\nYou scored " + score + " out of " + quizData.length);
}

// Start the quiz
startQuiz();
