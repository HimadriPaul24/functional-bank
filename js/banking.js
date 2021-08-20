// console.log('banking js added');
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('deposit buton clicked');
    const depositInput=document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // console.log(depositAmount);

    //get current deposit
    const depositTotal=document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    // depositTotal.innerText=depositAmount;
    depositTotal.innerText = previousDepositTotal  + depositAmount;
    // console.log(depositTotalText);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal+ depositAmount;

    //clear input field
    depositInput.value='';

});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function (){
    // console.log('wihdraw clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const withdrawAmount = parseFloat(withdrawAmountText);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


    // withdrawTotal.innerText = withdrawTotalText + withdrawAmountText;
    // withdrawTotal.innerText = withdrawTotalText + withdrawAmount;
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear withdraw input field
    withdrawInput.value= '';
})