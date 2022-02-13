function updeteProdactNumber(prodect, price, isIncreasing) {
    const prodectInput = document.getElementById(prodect + '-number');
    let prodectNumber = prodectInput.value;
    if (isIncreasing == true) {
        prodectNumber = parseInt(prodectNumber) + 1;
    }
    else if (prodectNumber > 0) {
        prodectNumber = parseInt(prodectNumber) - 1;
    }
    prodectInput.value = prodectNumber;
    //updete prodect total
    const prodectTotal = document.getElementById(prodect + '-total');
    prodectTotal.innerText = prodectNumber * price;
    calculateTotal();
}
function totalValue(prodact) {
    const phoneInput = document.getElementById(prodact + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = totalValue('phone') * 1219;
    const caseTotal = totalValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone Event
document.getElementById('phone-plus').addEventListener('click', function () {
    updeteProdactNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updeteProdactNumber('phone', 1219, false);
});
//case event
document.getElementById('case-plus').addEventListener('click', function () {
    updeteProdactNumber('case', 56, true);
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
});

document.getElementById('case-minus').addEventListener('click', function () {
    updeteProdactNumber('case', 56, false);
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; */
});