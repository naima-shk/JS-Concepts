let input = "Hi ,Human";
const vowel = ["a", "e", "i", "o", "u", "y"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowel.length; j++) {
    if (input[i] === input[j]) {
      resultArray.push(input[i]);
    }
    //console.log('j is '+  j);
  }
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}
console.log(resultArray.join("").toUpperCase());
