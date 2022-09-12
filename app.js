function getPin(){
    const pin = gerneratePinMatchar();
    const pinSting = pin + '';
    if(pinSting.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function gerneratePinMatchar(){
    const pinMatchar = Math.round(Math.random()*10000)
    return pinMatchar;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin =getPin()
    // console.log(pin)
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
        // else{
        //     // console.log(number)
        // }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('submit-button').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-number');
    const typePin = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(currentPin == typePin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})