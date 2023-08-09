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





function sortMaker(arr) {

    const temp = [2];

    if (arr[0] >= 0 && arr[1] >= 0) {
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










function canPay(changeArray, totalDue) {

    if(changeArray === undefined || changeArray.length==0){
        return 'You entered empty Array.'
    }
    else{


    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const index = changeArray[i];
        sum = sum + index;
    }
    if (sum >= totalDue) {
        return true;
    }else{
        return false;
    }
    }

}