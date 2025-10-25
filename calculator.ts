// TS: Type annotation - specifies parameter must be a number (not in JS)
function deriveFinalPrice(inputPrice: number) {
  const finalPrice = inputPrice + inputPrice * 0.19;
  // TS: Non-null assertion operator (!) - tells TS this element will definitely exist (not in JS)
  const outputEl = document.getElementById("final-price")!;
  outputEl.textContent = `Final Price: ` + finalPrice + ` €`;
}

// TS: Non-null assertion operator (!) - guarantees form element exists (not in JS)
const formEl = document.querySelector('form')!;

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  // TS: Type assertion (as) - explicitly tells TS this is an HTMLFormElement (not in JS)
  const fd = new FormData(event.currentTarget as HTMLFormElement);
  // TS: Non-null assertion operator (!) - ensures the value is not null (not in JS)
  const inputPrice = fd.get('price')!;
  // Note: + operator converts string to number (this works in JS too)
  deriveFinalPrice(+inputPrice);
});