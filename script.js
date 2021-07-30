document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const input = text.value;
  const inputNormal = [];
  for (let i = 0; i < input.length; i++) {
    inputNormal.push(input[i].toLowerCase().trim().replace("_", ""));
  }
  return console.log(inputNormal);
});
