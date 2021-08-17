// get deposit and withdraw input
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
};

// get and update depo and withdraw amount
function updatePreviousAmount(previousAmountId, newAmount) {
    const previousAmountField = document.getElementById(previousAmountId);
    const previousAmountText = previousAmountField.innerText;
    const previousAmount = parseFloat(previousAmountText);
    previousAmountField.innerText = previousAmount + newAmount;
};

// get current main balance
function currentMainBalance() {
    const mainBalanceField = document.getElementById('balance-total');
    const mainBalanceText = mainBalanceField.innerText;
    const mainBalance = parseFloat(mainBalanceText);
    return mainBalance;
};

// get and update main balance
function updateMainBalance(mainBalanceId, newAmount, isAdd) {
    const mainBalanceField = document.getElementById(mainBalanceId);
    const mainBalance = currentMainBalance();
    if (isAdd == true) {
        mainBalanceField.innerText = mainBalance + newAmount;
    }
    else {
        mainBalanceField.innerText = mainBalance - newAmount;
    }
};

// add eventhandler on deposit and withdraw button
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepoAmount = getInput('deposit-input');
    if (newDepoAmount > 0) {
        updatePreviousAmount('deposite-total', newDepoAmount);
        updateMainBalance('balance-total', newDepoAmount, true);
    }

});

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInput('withdraw-input');
    const currentBalance = currentMainBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updatePreviousAmount('withdraw-total', newWithdrawAmount);
        updateMainBalance('balance-total', newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        // console.log('Please withdraw less than your current balance!')
        alert('Please withdraw less than or equal your current balance!');
    }

});