// prompt the user for info seperated by commas
// split the info at the comma, making an array of flavors
// count the instances of each flavor
// console log the result of that count as a table


const userInput = prompt("Enter a list of froyo flavors, seperated by commas:");

// const userInput = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

const cleanData = userInput.split (",");


const froyo = {};

for (const index in cleanData) {
  const flavor = cleanData[index];

  if (froyo[flavor]) {
    froyo[flavor] += 1;
  } else {
    froyo[flavor] = 1;
  }
}

console.log(froyo);