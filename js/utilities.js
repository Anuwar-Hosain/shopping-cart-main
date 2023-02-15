//  Increase  and discase function
function updateCaseNumber(isInCrease, inputField) {
  const caseInputNumber = document.getElementById(inputField);
  const caseInputNumberString = caseInputNumber.value;
  const previousCaseNumber = parseInt(caseInputNumberString);
  let newCaseNumber;
  if (isInCrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseInputNumber.value = newCaseNumber;
  return newCaseNumber;
}
// case price update
function updateCasePrice(newCase, totalPrice) {
  const caseTotalPrice = newCase * 59;
  const caseTotalElement = document.getElementById(totalPrice);
  caseTotalElement.innerText = caseTotalPrice;
}
// phone price update
function updatePhonePrice(newCase, totalPrice) {
  const caseTotalPrice = newCase * 1219;
  const caseTotalElement = document.getElementById(totalPrice);
  caseTotalElement.innerText = caseTotalPrice;
}
// phone total price tax included function
function getTextElementById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalPriceString = phoneTotalElement.innerText;
  const phoneTotalPrice = parseInt(phoneTotalPriceString);
  return phoneTotalPrice;
}
// set Text function
function setTextElementById(element, value) {
  const subTotalElement = document.getElementById(element);
  subTotalElement.innerText = value;
}
// calculate sub total
function subTotal() {
  const currentPhoneTotal = getTextElementById("phone-total-price");
  const currentCaseTotal = getTextElementById("case-total-price");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementById("sub-total", currentSubTotal);
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementById("tax-total", taxAmount);
  const finalTotal = currentSubTotal + taxAmount;
  setTextElementById("final-total", finalTotal);
}
