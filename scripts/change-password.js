const oldInputPassword = document.getElementById("old-password");
const newInputPassword = document.getElementById("new-password");
const retypeNewInputPassword = document.getElementById("retype-new-password");
const submitBtn = document.getElementById("submit");

function validateNewPassword(oldInputValue, newInputValue, retypeInputValue) {
  if (oldInputValue === newInputValue)
    return alert("Old and New password are same!");

  const regix =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,}$/;

  const isValid = regix.test(newInputValue);
  if (!isValid) return alert("Please enter a valid password!");
  if (newInputValue !== retypeInputValue)
    return alert("Password does not match!");
}

function onSubmit(event) {
  const oldInputValue = oldInputPassword.value;
  const newInputValue = newInputPassword.value;
  const retypeInputValue = retypeNewInputPassword.value;

  validateNewPassword(oldInputValue, newInputValue, retypeInputValue);

  alert("Password change successfully!");
}

submitBtn.addEventListener("click", () => {
  onSubmit();
});
