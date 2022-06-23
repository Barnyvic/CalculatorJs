let input1 = Number(prompt("hello pls input a number"));
let input2 = Number(prompt("hello pls input second  number"));

let Operator = prompt("Please Add an operator +,*,-,/");

function Calculator(input1, input2, Operator) {
  if (Operator == "+") {
    let Answer = input1 + input2;
    alert(`Answer:${Answer}`);
  } else if (Operator == "-") {
    let Answer = input1 - input2;
    alert(`Answer:${Answer}`);
  } else if (Operator == "*") {
    let Answer = input1 * input2;
    alert(`Answer:${Answer.toFixed(2)}`);
  } else {
    let Answer = input1 / input2;
    alert(`Answer:${Answer.toFixed(2)}`);
  }
}

Calculator(input1, input2, Operator);
