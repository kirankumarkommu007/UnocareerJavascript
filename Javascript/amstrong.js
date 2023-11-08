let num = 153;
let temp = num;
let newNumber = 0;

for (let j = 0; j < 3; j++) {
  let i;
  if (j === 0) {
    i = 100;
  } else if (j ===1) {
    i = 10;
  } else {
    i = 1;
  }

  let r = num /i |0;
  let temp1 = num % i;
  num =temp1
  newNumber =newNumber+ (r * r * r);
}

if (newNumber === temp) {
  console.log("true");
} else {
  console.log("false");
}

