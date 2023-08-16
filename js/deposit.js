document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const balanceField = document.getElementById('balance');
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalance + newDepositAmount;
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    
    
    depositTotal.innerText =currentDepositTotal;
    balanceField.innerText = currentBalanceTotal;
    depositField.value = '';
})