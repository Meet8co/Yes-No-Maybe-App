document.getElementById("ask-button").addEventListener("click", () => {
  const answers = ["Yes", "No", "Maybe"];
  const question = document.getElementById("question").value.trim();

  if (question === "") {
    document.getElementById("answer").innerText = "Please ask a question!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * answers.length); // Produces 0, 1, or 2
  const randomAnswer = answers[randomIndex];

  document.getElementById("answer").innerText = `Answer: ${randomAnswer}`;
});

// Secret button option picker
document.querySelectorAll(".option-button").forEach(button => {
  button.addEventListener("click", (event) => {
    const selectedAnswer = event.target.getAttribute("data-answer");
    document.getElementById("answer").innerText = `Answer: ${selectedAnswer}`;
    
    // Optionally hide the options after selection
    document.getElementById("secret-options").classList.add("hidden");
  });
});

// Show options when the secret button is clicked
document.getElementById("secret-button").addEventListener("click", () => {
  const optionsDiv = document.getElementById("secret-options");
  optionsDiv.classList.toggle("hidden");
});
