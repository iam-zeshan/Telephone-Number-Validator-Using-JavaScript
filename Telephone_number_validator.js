
const forFourteenAndThirteen = (str) => {
    if (str[0] == "(" && str.slice(1, 4).every(inBetween => inBetween > 0 && inBetween < 10) && str[4] == ")" && str.slice(5, 8).every(inBetween => inBetween > 0 && inBetween < 10) && str[8] == "-" && str.slice(9, 13).every(inBetween => inBetween > 0 && inBetween < 10)) {
        return true;
    } else {
        return false;
    }
}

const fourteen = (str) => {
    if (str[0] == 1) {
        let forLengthThirteen = str.slice(1);
        return forFourteenAndThirteen(forLengthThirteen);
    } else {
        return false;
    }
}


const twelve = (str) => {
    if (str.slice(0, 3).every(inBetween => inBetween > 0 && inBetween < 10) && str[3] == "-" && str.slice(4, 7).every(inBetween => inBetween > 0 && inBetween < 10) && str[7] == "-" && str.slice(8, 12).every(inBetween => inBetween > 0 && inBetween < 10)) {
        return true;
    } else {
        return false;
    }
}
const thirteen = (str) => {
    if (str[0] == 1) {
        let forTwelve = str.slice(1);
        return twelve(forTwelve);
    } else if (str[0] == '(') {
        let forTwelve = str.slice(0);
        return forFourteenAndThirteen(forTwelve);
    }
    else {
        return false;
    }
}

const eleven = (str) => {
    if (str[0] != 1) {
        return false;
    } else {
        if (str.every(inBetween => inBetween > 0 && inBetween < 10)) {
            return true;
        } else {
            return false;
        }
    }
}

const ten = (str) => {
    if (str.every(inBetween => inBetween > 0 && inBetween < 10)) {
        return true;
    } else {
        return false;
    }
}
function telephoneCheck(str) {
    const newStr = str.split(" ").join("").split("");
    if (newStr.length === 14) {
        return fourteen(newStr);
    } else if (newStr.length === 13) {
        return thirteen(newStr);
    }
    else if (newStr.length === 12) {
        return twelve(newStr);
    }
    else if (newStr.length === 11) {
        return eleven(newStr);
    }
    else if (newStr.length === 10) {
        return ten(newStr);
    }
    else {
        return false;
    }
}

console.log(telephoneCheck("(555)555-5555"));