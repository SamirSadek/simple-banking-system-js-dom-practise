document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    const balanceField = document.getElementById('balance');
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalance - newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;
    balanceField.innerText = currentBalanceTotal;
    withdrawField.value = '';
})