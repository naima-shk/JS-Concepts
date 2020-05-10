let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
secretMessage.pop();
secretMessage.push("to", "program");
console.log(secretMessage.length - 1);
secretMessage[7] = "right";
secretMessage.shift(0);
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know");
console.log(secretMessage.join(" "));
