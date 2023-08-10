// problem #01
// ===========================================

// function cubeNumber(number) {

//     if (typeof number !== 'number') {
//         return 'Please enter valid number.'
//     }
//     else {
//         const cube = number * number * number;
//         return cube;
//     }
// }


// const result = cubeNumber(0);
// console.log(result);

// indexof()
// ============================================





// problem #02
// ============================================

// function matchFinder(string1, string2) {

//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return 'please enter string type input.'
//     }
//     else{
//         if(string1.indexOf(string2) !== -1){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// const checkMatch =matchFinder("Peter Parker","pet");
// console.log(checkMatch);





// problem #03
// ============================================

// function sortMaker(arr) {

//     const temp = [2];

//     if (arr[0] >= 0 && arr[1] >= 0) {
//         if (arr[0] > arr[1]) {
//             return arr;
//         }
//         else if(arr[0] < arr[1]){
//             const temp = arr[0];
//             arr[0] = arr[1];
//             arr[1] = temp;
//             return arr;
//         }else{
//             return 'equal';
//         }
//     }
//     else{
//         return 'Invalid Input';
//     }

// }


// let x = [0, 1];
// const checkOutputArray = sortMaker(x);
// console.log(checkOutputArray);




// problem #04
// =======================================

// function findAddress(obj) {

//     if(obj.includes(street)===true && obj.includes(house)===ture && obj.includes(society)===true){
//         return obj;
//     }

// }

// let x = {street:10, house:"15A", society:"Earth Perfect"};
// const checkOutput = findAddress(x);
// console.log(checkOutput);





//  problem #04 Again try.
// ========================================

        // console.log(street, house, society);

function findAddress(obj) {

    if(typeof obj !== 'object'){
        return 'please enter object type input.'
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street+ "," +house+","+society;
    }
}

let object = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
};
const address = findAddress(object);

console.log(address);




// problem #05
// ========================================


        // if(index== 0){
        //     return 'The first element of arrary is empty. please enter valid input.'
        //     break;
        // }

        // console.log(index);
            //  console.log(sum);
// function canPay(changeArray, totalDue) {

//     if(changeArray === undefined || changeArray.length==0){
//         return 'You have entered empty Array.';
//     }
//     else{


//     let sum = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         const index = changeArray[i];
//         sum = sum + index;
//     }
//     if (sum >= totalDue) {
//         return true;
//     }else{
//         return false;
//     }
//     }

// }

// const x = [1,2,5];
// const m = 10;
// const y = [1, 5, 5];
// const n = 10;

// const z = [];
// const o = 10;

// const checkOutput = canPay(x,m);
// const checkOutput1 = canPay(y,n);
// const checkOutput2 = canPay(z,o);
// console.log(checkOutput);
// console.log(checkOutput1);
// console.log(checkOutput2);