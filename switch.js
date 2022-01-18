const expr = "calamansi";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
  case "Calamansi":
    console.log(`${expr} is $2.79 a pound`);
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// cases does not allow Logical Expressions 