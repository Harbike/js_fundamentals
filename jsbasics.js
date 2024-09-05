'use strict';
// Body Mass Index
// BMI = mass/(height ** 2)
// OR mass/(height * height)

// let markHigherBMI, markHigherBMI2;
// TEST DATA 1
// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

// const markBMI = markMass / (markHeight ** 2);
// const approxMarkBMI = parseFloat(markBMI.toFixed(1));

// const johnBMI = johnMass / (johnHeight ** 2);
// const approxJohnBMI = parseFloat(johnBMI.toFixed(1));

// markHigherBMI = markBMI > johnBMI;

// console.log('TEST DATA 1');
// console.log(`Mark's Body Mass Index is ${approxMarkBMI}`);
// console.log(`John's Body Mass Index is ${approxJohnBMI}`);
// console.log(`The notion that Mark's BMI is higher than John's is ${markHigherBMI}
//     `); //ENTR to create new line instead of \n

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's!👌
//         `);
//     console.log(`Mark's BMI ${approxMarkBMI} is higher than John's ${approxJohnBMI}!
//         `);
// } else {
//     console.log(`John's BMI is higher than Mark's!
//         `);
//     console.log(`John's BMI ${approxJohnBMI} is higher than Mark's ${approxMarkBMI}!
//         `);
// }

// TEST DATA 2
// const markHeight2 = 1.88;
// const markMass2 = 95;
// const johnHeight2 = 1.76;
// const johnMass2 = 85;

// const markBMI2 = markMass2 / (markHeight2 ** 2);
// const approxMarkBMI2 = parseFloat(markBMI2.toFixed(1));

// const johnBMI2 = johnMass2 / (johnHeight2 ** 2);
// const approxJohnBMI2 = parseFloat(johnBMI2.toFixed(1));

// markHigherBMI2 = markBMI2 > johnBMI2;

// console.log('TEST DATA 2');
// console.log(`Mark's Body Mass Index is ${approxMarkBMI2}`);
// console.log(`John's Body Mass Index is ${approxJohnBMI2}`);
// console.log(`The notion that Mark's BMI is higher than John's is ${markHigherBMI2}
//     `);

// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI is higher than John's!
// `);
// console.log(`Mark's BMI ${approxMarkBMI2} is higher than John's ${approxJohnBMI2}!
//         `);
// } else {
//     console.log(`John's BMI is higher than Mark's!
// `);
// console.log(`John's BMI ${approxJohnBMI2} is higher than John's ${approxMarkBMI2}!
//         `);
// }

// Coding Challenge 3
// TEST DATA (DOLPHIN and KAOLAS)
// const minimumScore = 100;
// const firstGameDolphin = 96;
// const secondGameDolphin = 108;
// const thirdGameDolphin = 89;
// const firstGameKaola = 88;
// const secondGameKaola = 91;
// const thirdGameKaola = 90;

// const averageDolphin = Number(firstGameDolphin + secondGameDolphin + thirdGameDolphin)/3;

// const averageKaola = Number(firstGameKaola + secondGameKaola + thirdGameKaola)/3;

// console.log(averageDolphin, averageKaola);
// debugger;
// // compare average to determine winner
// (debugger;)
// if (averageDolphin > averageKaola && averageDolphin >= minimumScore) {
//     console.log(`Team Dolphin wins!`);
// } else if (averageDolphin > averageKaola && !(averageDolphin >= minimumScore)){
//     console.log(`Go Team Dolphin, you can do better!`);
// } else if(averageDolphin === averageKaola && (averageKaola >= minimumScore) && (averageDolphin >= minimumScore)){
//     console.log(`It's a draw! There will be an extension`);
// } else if (averageDolphin === averageKaola && !((averageKaola >= minimumScore) && (averageDolphin >= minimumScore))){
//     console.log(`No team wins the trophy!`);
    
// }
// else if(averageKaola > averageDolphin && averageKaola >= minimumScore){
//     console.log(`Team Kaola wins!`);
// } else{
//     console.log(`Go Team Kaola, you can do better!`);
    
// }


// FUNCTIONS, ARRAYS and OBJECTS
const gameDolphin =  [85, 54, 41];
// const yo = new Array(45, 49, 12, 99, 105);
// console.log(yo);


const gameKaola = [23, 34, 27];
const gameRounds = 3;
let sum = 0;

// calculate total points
const totalPoints = (arr, sum) => {
    for (let i = 0; i <= (arr.length - 1); i++){
        sum += arr[i];
    }
    return sum;
}
// calculate gameRounds
// const gameRounds = function(arr) {
//     return arr.length;
// }
// calculate average score
const calcAverage = (totalPoints, gameRounds) => {
    const avgScore = totalPoints / gameRounds
    return avgScore;
}

// Team Dolphin
const dolphinTotal = (totalPoints(gameDolphin, sum));
const avgDolphin = calcAverage(dolphinTotal, gameRounds);
// console.log(avgDolphin);

// Team Kaola
const kaolaTotal = (totalPoints(gameKaola, sum));
const avgKaola = calcAverage(kaolaTotal, gameRounds);
// console.log(avgKaola);

// checkWinner
function checkWinner(avgDolphin, avgKaola) {
    if (avgDolphin >= (avgKaola * 2)){
        console.log(`Team Dolphin wins (${avgDolphin} vs. ${avgKaola})`);
    } else if(avgKaola >= (avgDolphin * 2)){
        console.log(`Team Kaola wins (${avgKaola} vs. ${avgDolphin})`);
    } else {
        console.log(`No team wins!`);
    }
}

checkWinner(avgDolphin, avgKaola);
checkWinner(57, 116);

// Tip Calculator -- HAVE IT RETURN AS AN ARRAY
// const bills = [291, 255, 20, 60, 95];
// let tips = new Array();
// const calcTip = function (bill, tip) {
//     if (50 >= bill <= 300){
//         tip = (15 / 100) * bill;
//         console.log(tip);
//         return tip;
//     } else {
//         console.log(`The tip is 20%!`);
//         tip = (20 / 100) * bill;
//         console.log(tip);
//         return tip;
//     }
// };
// bill >= 50 && bill <= 300? bill * (15/100) : bill * (20/100)
// WHERE ? = condition
//         : = else

// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3]), calcTip(bills[4])];

// bestFriend Selection
const tunde = {
    skinColor : 'Brown',
    weight : '54g',
    friends : ['Shade', 'Tola', 'Gbenga']
}
console.log(`Tunde has ${tunde.friends.length} friends, and his best friend is called ${tunde['friends'][0]}`);
