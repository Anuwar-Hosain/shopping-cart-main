document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true, "phone-input-field");
    updatePhonePrice(newCaseNumber, "phone-total-price");
    subTotal();
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "phone-input-field");
    updatePhonePrice(newCaseNumber, "phone-total-price");
    const currentPhoneTotal = getTextElementById("phone-total-price");
    subTotal();
  });
