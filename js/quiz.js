//  Declare & assign variables pointing to the corresponding element(s)

const statement = document.getElementById("statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const fact = {
  statement: "Arrays are like objects",
  answer: true,
  explanation: "Arrays are a kind of object with special properties",
};

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact.statement;

// TODO 4: Declare disable & enable functions to set or remove the

const disable = (button) => {
  button.setAttribute("disabled", "");
};

const enable = (button) => button.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer

function isCorrect(guessString) {
  return guessString === fact.answer.toString();
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons

for (let button of optionButtons) {
  button.addEventListener("click", (e) => {
    explanation.textContent = fact.explanation;

    for (let otherButton of optionButtons) {
      disable(otherButton);
    }
    // TODO 8: Within the event handler function,
    // Get the guessed value from the clicked button
    if (isCorrect(button.value)) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
   
  });
}
