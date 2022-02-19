function getInputValue(inputId){
    //debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = ''; 
    return amountValue;   
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /*const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount>0){
        updateTotalField('deposite-total',depositeAmount);
        updateBalance(depositeAmount, true);
    }
});

//handle withdraw button
document.getElementById('Withdraw-button').addEventListener('click', function(){
const withdrawAmount = getInputValue('withdraw-input');
const currentBalance = getCurrentBalance();
if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
}
if(withdrawAmount > currentBalance){
    console.log('You can not withdraw more than have your account.');
}
});