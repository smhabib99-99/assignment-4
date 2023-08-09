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

function sortMaker(arr) {

    const temp = [2];

    if (arr[0] > 0 && arr[1] > 0) {
        if (arr[0] > arr[1]) {
            return arr;
        }
        else if(arr[0] < arr[1]){
            const temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        }else{
            return 'equal';
        }
    }
    else{
        return 'Invalid Input';
    }

}


let x = [2, 3];
const checkOutputArray = sortMaker(x);
console.log(checkOutputArray);
