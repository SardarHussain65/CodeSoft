(function () {
})();
let res = "";

function handleOperations(oper) {
  let lastValue = res[res.length - 1];
  if (
    lastValue === "/" ||
    lastValue === "x" ||
    lastValue === "+" ||
    lastValue === "-"
  ) {
    if (oper === "/" || oper === "x" || oper === "+" || oper === "-") {
    } else {
      res = `${res}${oper}`;
    }
  } else {
    res = `${res}${oper}`;
  }
}

function parse(str) {
  try {
    return Function(`'use strict'; return (${str})`)();
  } catch (e) {
    alert("Sorry! please enter valid expression");
  }
}

function calculate(val) {
  let screen = document.querySelector(".screen");
  let result = document.querySelector('.result');
  if (val === "C") {
    screen.value = "";
    result.value = 0;
    res = "";
  } else if (val === "=") {
    let lastValue = res[res.length - 1];
    if (res.length !== 0 && !["/", "x", "+", "-"].includes(lastValue)) {
      result.value = parse(res.replaceAll("x", "*")).toLocaleString();
      //   res = "";
    }
  } else {
    handleOperations(val);
    screen.value = res;
  }
}
