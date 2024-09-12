// JavaScript Fundamentals - Part 1

// LECTURE - Values and Variables
 const myCountry = 'Nigeria';
 const continent = 'Africa'; 
//  const population = 3000000;
 let myPopulation = 33000000;
 console.log(`${myCountry} is a country in ${continent} with ${myPopulation} million citizens`);
 
// LECTURE - Data Types
const isIsland = false;
let language;
console.log(typeof isIsland, typeof myPopulation, typeof myCountry, typeof language);

// LECTURE - let, const, and var
language = 'Yoruba';
// let myPopulation = 40000000; cannot access 'myPopulation' before initialization

// LECTURE - Basic Operators
let population_one = myPopulation / 2;
let population_two = myPopulation / 2;
console.log(`There would be ${population_one} citizens in the first half and ${population_two} citizens in the other half`);

myPopulation += 1;
console.log(myPopulation);

const finlandPopulation = 6000000;
if (myPopulation > finlandPopulation) {
    console.log(`${myCountry} has more population!`);
} else {
    console.log(`Finland has more population!`);    
}

const avgNormalPopulation = 33000000;
if (myPopulation === avgNormalPopulation) {
    console.log(`${myCountry} has the exact number of allowed citizens!`)
} else if(myPopulation < avgNormalPopulation)
    {
    console.log(`${myCountry} has less than the average population!`);
} else {
    console.log(`${myCountry} has more than the average population!`);
}

// const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
const country2 = 'Portugal';
const continent2 = 'Europe';
const language2 = 'Portuguese';
const population2 = 11000000;
// const population2 = 13000000; //20m below
// const population2 = 130000000; //above average
let description = 'Portugal is in Europe, and its 11 million people speak Portuguese';

// LECTURE - Strings and Template Literals
description = `${country2} is in ${continent2}, and its ${population2} million people speak ${language2}`
console.log(description);

// LECTURE - Taking Decisions: if / else Statements
if (population2 > avgNormalPopulation) {
    console.log(`${country2}'s population is above average!`)
} else {
    let difference = avgNormalPopulation - population2;
    console.log(`${country2}'s population is ${difference} below average!`);
}

// LECTURE - Type Conversion and Coercion
const a = '9' - '5'; //4 'number' (right)
const b = '19' - '13' + '17'; //-11 'number' (wrong 617String)
const c = '19' - '13' + 17; //23 'number' (right)
const d = '123' - 57; // 66 'number' (right)
const e = 5 + 6 + '4' + 9 - 4 - 2; // 18 'number' (wrong 1143 number)

console.log(a,typeof a);
console.log(b,typeof b);
console.log(c,typeof c);
console.log(d,typeof d);
console.log(e,typeof e);

// LECTURE - Equity Operators: == vs. ===
// let numNeighbours = prompt('How many neighbour countries does your country have?');
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
let numNeighbours = 'How many neighbour countries does your country have?';
// if(numNeighbours == 1){
//     console.log(`Only 1 border!`);   
// } else if(numNeighbours > 1){
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }
if(numNeighbours === 1){
    console.log(`Only 1 border!`);   
} else if(numNeighbours > 1){
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}

// LECTURE - Logical Operators
if(language2 == 'English' && population2 == 50000000 && country2 !== isIsland){
    console.log(`You should live in ${country2} 😉`);
} else {
    console.log(`${country2} does not meet your criteria 🥺`);
}

//LECTURE - The Switch Statement
