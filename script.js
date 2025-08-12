const feedbackForm = document.getElementById("feedbackForm");
const feedbackInput = document.getElementById("feedbackInput");
const feedbackMsg = document.getElementById("feedbackMsg");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const feedback = feedbackInput.value.trim();
  if (feedback.length === 0) return;

  // Aqui você pode enviar o feedback para algum lugar ou salvar
  feedbackMsg.classList.remove("hidden");
  feedbackInput.value = "";
  setTimeout(() => {
    feedbackMsg.classList.add("hidden");
  }, 3000);
});
