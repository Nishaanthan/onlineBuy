// <script type="text/javascript">
const form = document.getElementById("LoginForm");
const name = document.getElementById("name");
const password = document.getElementById("password");
const text = document.getElementById("text");
const passText = document.getElementById("passText");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const namePattern = /^[A-Za-z]{3,}$/;
const passw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const Upassword = document.getElementById("Upassword");
const Upassword2 = document.getElementById("Upassword2");





function validation() {
    if ((name.value).match(namePattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Username is Valid.";
        text.style.color = "#00ff00"
        name.style.color = "#00ff00";
        // button.disabled = false;
        // alert("no blanck value");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Username is UnValid.";
        text.style.color = "#f80622"
        name.style.color = "#f80622";
    }

}

function validatePass() {
    if ((password.value).match(passw)) {
        passText.innerHTML = "Strong password";
        passText.style.color = "#00ff00";
        password.style.color = "#00ff00";

    } else {
        passText.innerHTML = "incorrect password";
        passText.style.color = "#f80622";
        password.style.color = "#f80622";
    }


}






// </script>