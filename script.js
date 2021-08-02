document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const input = text.value;
  const row = input.split("\n");
  for (row2 of row) {
    const indexUpper = row2.indexOf("_");
    let divideWord = row2.split("_");
    const joint = divideWord.join("").toLowerCase();
    const joint2 = joint
      .replace(joint[indexUpper], joint[indexUpper].toUpperCase())
      .trim();
    // console.log(divideWord);
    // divideWord.join("");
    console.log(joint2);

    // const indexUpper = row2.indexOf("_");
    // indexUpperCase = indexUpper.toCase();
    // console.log(indexUpper);
    // console.log(row2.toLowerCase().replace("_", "").trim());
  }
});
