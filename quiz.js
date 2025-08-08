document.getElementById("river-quiz-form").onsubmit = function() {
  let score = 0;

  // Get answers one by one using querySelector
  let q1 = document.querySelector('#q1').value;
  let q2 = document.querySelector('#q2').value;
  let q3 = document.querySelector('#q3').value;
  let q4 = document.querySelector('#q4').value;
  let q5 = document.querySelector('#q5').value;
  let q6 = document.querySelector('#q6').value;
  let q7 = document.querySelector('#q7').value;
  let q8 = document.querySelector('#q8').value;
  let q9 = document.querySelector('#q9').value;
  let q10 = document.querySelector('#q10').value;

  // Score calculation
  if (q1 === "correct") { score++; }
  if (q2 === "correct") { score++; }
  if (q3 === "correct") { score++; }
  if (q4 === "correct") { score++; }
  if (q5 === "correct") { score++; }
  if (q6 === "correct") { score++; }
  if (q7 === "correct") { score++; }
  if (q8 === "correct") { score++; }
  if (q9 === "correct") { score++; }
  if (q10 === "correct") { score++; }

  // Decide feedback message and image
  let message = "";
  let image = "";

  if (score <= 3) {
    message = `You scored ${score}/10. Time to dive deeper into the river’s story!`;
    image = "images/quiz-low.png";
  } else if (score <= 7) {
    message = `Nice work: ${score}/10. You know a fair bit, but there’s more to learn.`;
    image = "images/quiz-mid.png";
  } else {
    message = `Excellent: ${score}/10! You’re a San Marcos River pro.`;
    image = "images/quiz-success.png";
  }

  // Show feedback
  document.getElementById("feedback-text").innerHTML = message;
  document.getElementById("feedback-img").src = image;
  document.getElementById("quiz-feedback").classList.remove("d-none");
  document.getElementById("quiz-feedback").scrollIntoView({ behavior: 'smooth' });

  return false; // prevent form refresh
};
