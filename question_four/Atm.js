// function to check the validity of the pin
function getAction() {
    //Initialize Pin value with variable Pin

    var pin = document.getElementById("number").value;
    var pin_number = 4567;

    //To check Pin entered is correct or not
    if (pin == pin_number) {
    document.getElementById("demo").innerHTML = "Please Choose Your transaction";
    document.getElementById("options12").style.display = "block"; //if pin number is correct options will Display.
    } else {
    document.getElementById("demo").innerHTML = "Pin does not match!";
    }

}

//function to display balance amount
function myFunction(val) {
    m = 15000;
    if (val == 1) {
    //Option 1 is select to shows balance amount

    document.getElementById("demo1").innerHTML = "Your balance is: " + m;
    document.getElementById("display").style.display = "none";
    document.getElementById("display1").style.display = "none";
    }
    if (val == 2) {
    //Option 2 select to display text field to enter withdraw amount

    document.getElementById("display").style.display = "block";
    document.getElementById("display1").style.display = "none";
    }
    if (val == 3) {
    //Option 3 is select to display fast-cash option
    document.getElementById("display1").style.display = "block";
    document.getElementById("display").style.display = "none";
    }
}
function getAmount() {
    //function To Withdraw Amount
    m = 15000;
    //Initialize the text-box value in a variable
    var a = document.getElementById("amount1").value;
    //Check if entered amount is greater than the original amount or not and it also should be mulitple of 100
    if (a <= m && a % 100 == 0)
    //alert("" +a);
    document.getElementById("display").innerHTML =
        "You have withdrawn : Ksh." + a;
    //alert("invalid cash");
    else document.getElementById("display").innerHTML = "Invalid cash! Try again";
}

function getAmount_1() {
    //Initialize the Dropdown value in a variable
    var x = document.getElementById("myselect1").value;
    m = 15000;
    //check if selected amount is greater than the original | total amount or not and it should be mulitple of 100
    if (x <= m && x % 100 == 0)
    //alert("take your amount" +x);
    document.getElementById("display1").innerHTML =
        "Please take your amount : " + x;
    else document.getElementById("display1").innerHTML = "Invalid cash! Try again";
}

// Top-up function
function topUp () {
m = 15000;
var topup = document.getElementById("amount2").value;

total = m + topup
    document.getElementById("topup").innerHTML =
    `Total balance is : Ksh.${m} + Ksh.${topup} `;
}

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];

// print form
function printForm() {
	print({
    printable: 'form1',
    type: 'html',
    targetStyles: ['*'],
    header: 'PrintJS - Print Form With Customized Header'
 })
}
