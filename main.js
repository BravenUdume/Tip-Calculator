
// function calculateTip() {
//     var billAmount = document.getElementById("billAmount").value;
//     var service = document.getElementById('service').value;
//     var people = document.getElementById('people').value;

//     //validate input
//     if ( billAmount === "" || service === 0 ){
//         alert('Please input actual values');
//         return;
//     }

//     //check if people input is lesser than 1 or equal to 1
//     if(people === "" || people <= 1){
//         numberOfPeople = 1;
//         document.getElementById('each').style.display = "none";
//     }
//     else{
//         document.getElementById("each").style.display = "block";
//     }

//     //calculate tip
//     var total = (billAmount * service)/ people;
//     total = Math.round(total * 100)/100;

//     //decimal point
//     total = total.toFixed(2);

//     document.getElementById("tip").style.display = "block";
//     document.getElementById("tip").innerHTML = total;

// }

// //hide tip on load
// document.getElementById("tip").style.display = "none";
// document.getElementById("each").style.display = "none";

// //click to call function
// document.getElementById('calculate').onclick = 
// function(){
// calculateTip();
// };




function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let service = document.getElementById("service").value;
    let people = document.getElementById("people").value;

    // var numberTester = /^[0-9]+$/;
    // function numberCheck(num){
    //     if(num != numberTester){
    //         alert("input digits");
    //         return true;
    //     }
    // }

    // numberCheck(billAmount);
    // numberCheck(people);
    //(billAmount != /^[0-9]+$/) ? alert("letters are not allowed"): true;
    /*if((billAmount === /^[0-9]+$/)) && (people === /^[0-9]+$/)){
        return true;
    }
    else{
        alert("letters are not allowed");
    }*/

    if (people === "" || people <= 1){
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    // calculate tip
    var total = (billAmount * service)/ people;
    total = Math.round(total * 100)/100;

    //decimal point
    total = total.toFixed(2);

    document.getElementById("tip_div").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

document.getElementById("tip_div").style.display = "none";

document.getElementById("calculate").onclick = 
function(){
    calculateTip();
};