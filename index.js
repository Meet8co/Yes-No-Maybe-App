document.getElementById("ask-button").addEventListener("click", () => {
  const answers = ["Yes", "No", "Maybe"];
  const question = document.getElementById("question").value.trim();

  if (question === "") {
    document.getElementById("answer").innerText = "Please ask a question!";
    return;
  }

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById("answer").innerText = `Answer: ${randomAnswer}`;
});
