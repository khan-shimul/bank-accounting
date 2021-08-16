// add event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    // get new deposite amount
    const depositeInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositeInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    depositeInput.value = '';

    // previous and update deposite amount 
    const totalDeposite = document.getElementById('deposite-total');
    const oldestDepoAmountText = totalDeposite.innerText;
    const oldestDepoAmount = parseFloat(oldestDepoAmountText);
    const totalDepositeAmount = oldestDepoAmount + newDepositAmount;
    totalDeposite.innerText = totalDepositeAmount;

    // update total balance
    const totalBalance = document.getElementById('balance-total');
    const oldestTotalBalanceText = totalBalance.innerText;
    const oldestTotalBalanceAmount = parseFloat(oldestTotalBalanceText);
    const currentBalance = oldestTotalBalanceAmount + newDepositAmount;
    totalBalance.innerText = currentBalance;
});

// add event handler on withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get new withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    withdrawInput.value = '';

    // get previous withdraw amount and update new withdraw amount
    const totalWithdraw = document.getElementById('withdraw-total');
    const oldestWithdrawAmountText = totalWithdraw.innerText;
    const oldestWithdrawAmount = parseFloat(oldestWithdrawAmountText);
    // update withdraw amount
    const currentWithdrawAmount = oldestWithdrawAmount + newWithdrawAmount;
    totalWithdraw.innerText = currentWithdrawAmount;

    // reduce total balance
    const balanceTotal = document.getElementById('balance-total');
    const oldestTotalBalanceText = balanceTotal.innerText;
    const oldestTotalBalanceAmount = parseFloat(oldestTotalBalanceText);
    const currentBalance = oldestTotalBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = currentBalance;
});