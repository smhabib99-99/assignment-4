function cubeNumber(number) {

    if (typeof number !== 'number') {
        return 'Please enter valid number.'
    }
    else {
        const cube = number * number * number;
        return cube;
    }
}


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