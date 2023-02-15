// Increase btn
document.getElementById("case-btn").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-input-field");
  updateCasePrice(newCaseNumber, "case-total-price");
  subTotal();
});
// discase btn
document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "case-input-field");
    updateCasePrice(newCaseNumber, "case-total-price");
    subTotal();
  });
