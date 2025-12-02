// 1. Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "Who is known as the father of computers?", answer: "charles babbage" },
    { question: "What planet is known as the Red Planet?", answer: "mars" },
    { question: "Which language is used for web styling?", answer: "css" }
];

// 2. Function to Run the Quiz
function runQuiz() {

    // 3. Score Initialization
    let score = 0;

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. Prompt for User Input
        let userAnswer = prompt(quizQuestions[i].question);

        // If user cancels the prompt
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        // 6. Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        // 7. Check the Answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            // 8. Provide Immediate Feedback
            alert("Correct! 👍");
        } else {
            alert("Wrong ❌. Correct answer: " + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score
    alert("Quiz Completed!\nYour score: " + score + " / " + quizQuestions.length);
}

// 10. Run the Quiz in Browser Console
runQuiz();
