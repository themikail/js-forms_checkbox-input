console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

const tosCheckbox = document.querySelector("#tos");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }

  hideTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the TOS checkbox
  const tosCheckbox = document.getElementById("tos");

  // Check if the TOS checkbox is checked
  if (tosCheckbox.checked) {
    // Hide the TOS error message
    hideTosError();

    // Show the success message
    const successMessage = document.querySelector('[data-js="success"]');
    successMessage.removeAttribute("hidden");

    alert("Form submitted");
  } else {
    // Show the TOS error message
    showTosError();
  }
});
