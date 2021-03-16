export function verifPin(x) {
    var flag = false;
    if (x.value.length == 4) {
        if (verif(x.value)) {
            flag = true;
        }
    }
    return flag;
}

function verif(x) {
    var flag = false;
    if (reg(x)) {
        if (verifPinTrue(x)) {
            flag = true;
        }
    }
    return flag;
}

function verifPinTrue(x) {
    var flag = false;
    var pinArr = x.split('');
    for (let i = 1; i < 4; i++) {
        if (pinArr[0] == pinArr[i]) {
            return flag;
        }
    }
    for (let i = 2; i < 4; i++) {
        if (pinArr[1] == pinArr[i]) {
            return flag;
        }
    }
    if (pinArr[2] == pinArr[3]) {
        return flag;
    }
    return flag = true;
}

function reg(x) {
    var flag = false
    var regex = /^[0-9]*$/;
    if (regex.test(x) == true) {
        flag = true;
    }
    return flag;
}