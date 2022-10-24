//JS Selection Statements
//Exercise 1

let favoriteNumber = Math.random() * 100;

let userNumber = window.prompt("What is your favorite number?");

if (userNumber < favoriteNumber) {
  window.alert("Your number is too low!");
} else if (userNumber > favoriteNumber) {
  window.alert("Your number is too high!");
} else {
  window.alert("Your number is correct!");
}

//Exercise 2

let birthMonth = window.prompt("What is your birth month?");

switch (birthMonth) {
  case "January || january":
    console.log("You were born in the winter!");
    break;
  case "February || february":
    console.log("You were born in the winter!");
    break;
  case "March || march":
    console.log("You were born in the spring!");
    break;
  case "April || april":
    console.log("You were born in the spring!");
    break;
  case "May || may":
    console.log("You were born in the spring!");
    break;
  case "June || june":
    console.log("You were born in the summer!");
    break;
  case "July || july":
    console.log("You were born in the summer!");
    break;
  case "August || august":
    console.log("You were born in the summer!");
    break;
  case "September || september":
    console.log("You were born in the fall!");
    break;
  case "October || october":
    console.log("You were born in the fall!");
    break;
  case "November || november":
    console.log("You were born in the fall!");
    break;
  case "December || december":
    console.log("You were born in the winter!");
    break;
  default:
    console.log("You did not enter a valid month!");
}

//Exercise 3

let typeId = "01";
let colorId = "BL";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Wife Beater";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  case "05":
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PR":
    color = "Purple";
    break;
  case "WH":
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
