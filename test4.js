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

function matchFinder(string1, string2) {

    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'please enter string type input.'
    }
    else{
        if(string1.indexOf(string2) !== -1){
            return true;
        }else{
            return false;
        }
    }
}

const checkMatch =matchFinder("Peter Parker","pet");
console.log(checkMatch);