const elementForm = document.querySelector(".form");
const elementInput = document.querySelector(".form_input");
const elementSelect = document.querySelector(".form_select");
const Result = document.querySelector(".result");
elementForm.addEventListener("submit", function (evt) {
  evt.preventDefault();


  const inputValue = elementInput.value;
  const selectValue = elementSelect.value;


  if (inputValue<0 || isNaN(inputValue)) {
  alert("Xatolik!(faqat musbat son kiritish mumkin)");
  } else {
    Result.textContent = `${(inputValue / selectValue).toFixed(2)} `;
  }
});
