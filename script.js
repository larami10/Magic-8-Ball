/* This index variable will be used to keep the same answer from showing up twice in a row.
 * Initialized to -1 to prevent it from being compared to one of the available indices in the messages array.
 */
let index = -1;

/* This will hide the '8' (if shown) and show the triangle (if hidden).
 * It will set the text on the triangle to the string 'answerText'.
 */
function makeAnswerAppear(answerText) {
  // Adds "hidden" CSS class to the '8'.
  document.getElementById("eight").classList.add("hidden");

  // Find the answer element, change the text, and remove the CSS "hidden" class.
  document.getElementById("answer-text").innerText = answerText;

  document.getElementById("answer-text").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");

  // Allow 1/1000th of a second to pass in order for the above changes to take effect.  Then remove the elements
  setTimeout(() => {
    document.getElementById("answer-text").classList.remove("hidden");
    document.getElementById("triangle").classList.remove("hidden");
  }, 1);
}

/* Returns a random integer in the range 'min' through 'max' inclusive. */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // randomInt variable is initialized to a random number.
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);

  // Skip unless index now equals previous random number.
  if (index !== -1) {
    // While previous random number (index) equals randomInt, find a new random number.
    while (index === randomInt) {
      randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

  // return randomInt
  return randomInt;
}

/* Generate an array of messages to return a random message. Set index to a random number
 * and verify that the new random message is not the same as the previously displayed message.
 */
function answerQuestion() {
  // Messages array contains 12 different messages the Magic 8 Ball can display.
  let messages = [
    "It is certain!",
    "Without a doubt!",
    "Yes definitely!",
    "Most likely!",
    "Signs point to yes!",
    "Outlook is good!",
    "Ask again later!",
    "Cannot predict now!",
    "Better not tell you now!",
    "My sources say no!",
    "Very doubtful!",
    "Don't count on it!",
  ];

  // Global index variable is initialized to random number returned from getRandomIntInclusive().
  index = getRandomIntInclusive(0, messages.length - 1);

  // Display the element of the messages array using the random index.
  makeAnswerAppear(messages[index]);
}
