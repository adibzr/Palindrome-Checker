const checkButton = document.getElementById("check-btn");
const response = document.getElementById("result");

const checkPoli = () => {
  const inputValue = document.getElementById("text-input").value;
  let message;
  const cleanInput = inputValue.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const isPoli = polindrome(cleanInput);

  if (inputValue === "") {
    alert("Please input a value");
  } else if (isPoli) {
    message = `${inputValue} is a palindrome`;
  } else {
    message = `${inputValue} is not a palindrome`;
  }

  response.innerHTML = message;
};

const polindrome = (inputValue) => {
  let input = inputValue.toLowerCase();
  if (input.length === 1 || input.length === 0) return true;
  if (inputValue.at(0) !== inputValue.at(-1)) return false;

  if (input.at(0) === input.at(-1)) {
    input = input.slice(1, -1);
    return polindrome(input);
  }
  return false;
};

checkButton.addEventListener("click", () => checkPoli());
