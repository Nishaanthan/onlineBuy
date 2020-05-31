const form = document.getElementById("signUp");
const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const Upassword = document.getElementById("Upassword");
const Upassword2 = document.getElementById("Upassword2");
const Uname = document.getElementById("Uname");
const email = document.getElementById("email");
const buttonS = document.getElementById("signUp");
const UnameS3 = document.getElementById("UnameS3");

console.log("fucked");

Uname.style.color ="#00ff00";
buttonS.disabled = true;

function Uvalidation() {
    if ((email.value).match(pattern)){
        email.style.color = "#00ff00";
    }
    else {
        email.style.color = "#f80622";
    }

}

function UvalidatePass() {

    if((Upassword.value).match(passw)){
        Upassword.style.color = "#00ff00";
    }
    else {
        Upassword.style.color = "#f80622";
    }


}

function UvalidateRePass() {

    if((Upassword2.value).match(passw) && password.value === Upassword2.value){
        Upassword2.style.color = "#00ff00";
    }else {
        Upassword2.style.color = "#f80622";
    }


}

function checkPassword() {
    let password1 = Upassword.value;
    let password2 = Upassword2.value;

    // If password not entered
    if (password1 === '')
        alert ("Please enter Password");

    // If confirm password not entered
    else if (password2 === '')
        alert ("Please enter confirm password");

    // If Not same return False.
    else if (password1 !== password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }
    // If same return True.
    else{
        alert("Password Match: Welcome to GeeksforGeeks!")
        return true;
    }
}