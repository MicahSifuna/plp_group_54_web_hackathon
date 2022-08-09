// function to show and confirm password.
// it toggles the password
function Toggle() {
    var toggle = document.getElementById("typepass");
    if (toggle.type === "password") {
        toggle.type = "text";
    }
    else {
        toggle.type = "password";
    }
}

// let user = {
//     "username": "Micah",
//     "email": "kutoto123@gmail.com",
//     "password": "JavaScript_Email"
// };

// const username = "Micah Kutoto";
// const email = "kutoto123@gmail.com";
// const password = "JavaScript_Email";

// function Validate() {

//     if(username !== "Micah Kutoto" || password !== "JavaScript_Email") {
//         alert("user information don't match!");
//     }
//     if( email !== "kutoto123@gmail.com") {
//         alert("email dont match!")

//     }
//     // if(password !== user.password) {
//     //     alert("password dont match!")

//     // }
// }

// function to validate the form
function validate(){
    let Email = document.getElementById('email').value;
    let Username = document.getElementById('username').value;
    let Password  = document.getElementById('password').value;

    if (Username !== "Micah"){
        alert("Please Enter correct username!");
        return false;
    }

    if (Email !== "kutoto123@gmail.com"){
        alert("Please Enter correct email");
        return false;
    }

    if (Password == ""){
        alert("Please enter correct password");
        return false;
    }

    // if (confirmPassword == "JavaScript_Email") {
    //     alert("password does not match!");
    //     return false;
    // }

    // email pattern validation
    let emailPat = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    let EmailmatchArray = Email.match(emailPat);

    if (EmailmatchArray == null){
        alert("Your Email Address Seems Incorrect. Please Try Again.");
        return false;
    }

    if(Username!== "" && Email!=="" && Password!=="" ){
        return true;
    }
}


// function to connect submit button to TO-DO page

function myFunc() {
    window.location.href="to-do.html";
}

