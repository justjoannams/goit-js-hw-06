const inputEl = document.getElementById("validation-input");

const handleLength = function (e) {
  const inputValue = this.value.trim().length;

  const requiredLength = this.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    this.classList.remove("invalid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", handleLength);
