
function payWithUPI(amount) {
  const upiLink = `upi://pay?pa=quizshorts12@oksbi&pn=KrishnaPoshak&am=${amount}&cu=INR`;
  window.location.href = upiLink;
}
