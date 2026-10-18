const openFormButton = document.querySelector("#open-form-button");
const formApply = document.querySelector("#form-apply");

if (!(openFormButton instanceof HTMLButtonElement) || !(formApply instanceof HTMLFormElement)) {
  throw new Error("Nie znaleziono przycisku lub formularza zgłoszeniowego.");
}

openFormButton.addEventListener("click", () => {
  const isOpening = formApply.hidden;

  formApply.hidden = !isOpening;
  openFormButton.setAttribute("aria-expanded", String(isOpening));
  openFormButton.textContent = isOpening ? "Zamknij formularz" : "Zaaplikuj";

  if (isOpening) {
    formApply.querySelector("input")?.focus();
  } else {
    openFormButton.focus();
  }
});
