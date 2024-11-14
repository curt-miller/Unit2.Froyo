// prompt the user for info seperated by commas
// split the info at the comma, making an array of flavors
// count the instances of each flavor
// console log the result of that count as a table


const userInput = prompt("Enter a list of froyo flavors, seperated by commas:");

// const userInput = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

const flavors = userInput.split (",");


// const createFlavorObject = (key, value) => {
//     const obj = {};
//     obj[key] = value;
//     return obj;
// }

// const flavorObject = createFlavorObject("flavor", flavors[0]);


// const flavorsArr = [];

// for (let i = 0; i < flavors.length; i++) {
//   const flavorKey = `flavors ${i + 1}`;
//   const flavorObj = createFlavorObject(flavorKey, flavors[i]);
//   flavorsArr.push(flavorObj);
// }


// console.log(flavorsArr);


const flavorCount = {};

flavors.forEach(flavor => {
    if (flavorCount[flavor]) {
        flavorCount[flavor] += 1;
    } else {
        flavorCount[flavor] = 1;
    }
});

console.table(flavorCount);

// for loop - if this key exsist add it to 1, if else set it to 1