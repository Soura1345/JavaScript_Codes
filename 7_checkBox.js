const myCheckBox = document.getElementById('myCheckBox');
const visabtn = document.getElementById("visabtn");
const MasterCardbtn = document.getElementById("MasterCardbtn");
const payPalbtn = document.getElementById("payPalbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `you'r subscribed`;
    }else{
        subResult.textContent = window.alert(`you' NOT subscriber`);
    }
    
    if(visabtn.checked){
        paymentResult.textContent = `you selected the visa`;
    }else if(MasterCardbtn.checked){
        paymentResult.textContent = `you selected the MasterCard`;
    }else if(payPalbtn.checked){
        paymentResult.textContent = `you selected the payPal`;
    }else{
        paymentResult.textContent = window.alert(`please select a mode of payment`);
    }
}

