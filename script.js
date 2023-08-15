const amount  = document.getElementById('amount');
const guests = document.getElementById('guests');
const Quality = document.getElementById('Quality');
const tipAmount = document.getElementById('tipAmount');

function calculateFunc(){
    const tip = ((amount.value * Quality.value) / (guests.value)).toFixed(2);
    amount.value ='';
    Quality.value = '';
    guests.value ='';

    if(isNaN(tip)){
        tipAmount.innerHTML = 'Tip $0 each';

        showTip();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';

        showTip();

    }

}

showTip = () =>{
    var x = tipAmount;
    x.className = 'show';
    setTimeout(() =>{x.className = x.className.replace('show', '');}, 3000) 
};