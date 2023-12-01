// the 3 inputs
var usernameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// the 2 buttons
var loginBtn = document.getElementById("login-btn");
var signupBtn = document.getElementById("sign-up");

// username label
var userLabel = document.getElementById("label-user");

// heading title
var head = document.getElementById("heading");

// alert
var success = document.getElementById("succ");

// array to save use personal data (variable)
var loginData;

// check local storage before beginning
if (localStorage.getItem("loginData") !== null) {
  loginData = JSON.parse(localStorage.getItem("loginData"));
} else {
  loginData = [];
}

// general setup
var mood = "Login";
loginBtn.innerHTML = mood;
signupBtn.innerHTML = "sign up";
head.innerHTML = mood;

// handle UI between signup and login
signupBtn.addEventListener("click", function () {
  if (signupBtn.innerHTML == "sign up") {
    mood = "sign up";
    loginBtn.innerHTML = mood;
    head.innerHTML = mood;
    signupBtn.innerHTML = "Login";
    userLabel.classList.remove("d-none");
    usernameInput.classList.remove("d-none");
  } else {
    var mood = "Login";
    loginBtn.innerHTML = mood;
    signupBtn.innerHTML = "sign up";
    head.innerHTML = mood;
    userLabel.classList.add("d-none");
    usernameInput.classList.add("d-none");
  }
});

// handle sign up (register)

loginBtn.addEventListener("click", function () {
  // start of sign up
  if (loginBtn.innerHTML == "sign up") {
    console.log("sign up ");
    //   check email exist
    if (emailExist() === true) {
     
        showAlert("email already exist")

    }else if (checkEmptyInputs()=== true){

        showAlert("inputs are empty")

    }
    else {
      console.log(loginData);
      var userData = {
        name: usernameInput.value,
        email: emailInput.value,
        pass: passwordInput.value,
      };
      loginData.push(userData);
      showAlert("success")
    
      console.log(loginData);
      setLocalStorage();
      clearInputs();
    }

    // start of login
  } else if (loginBtn.innerHTML == "Login") {
    if (checkEmptyInputs() === true){

        showAlert("inputs are empty")

    }else if (checkEmailAndPassword() === true){
        console.log("hi");
        window.location.href = "login.html"
    }else{
        showAlert("icorrect mail or password")

    }

  }
});
// clear inputs
function clearInputs() {
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function setLocalStorage() {
  localStorage.setItem("loginData", JSON.stringify(loginData));
}

// check email exist or not
function emailExist() {
  for (var i = 0; i < loginData.length; i++) {
    if (loginData[i].email.toLowerCase() === emailInput.value.toLowerCase()) {
      console.log("found");
      return true;
    }
  }
}

function checkEmptyInputs(){
    if(usernameInput.classList.contains("d-none")){
        if( emailInput.value === "" || passwordInput.value === ""){
            return true
        }else{
            return false
        }
    }else {
        if(usernameInput.value==="" || emailInput.value === "" || passwordInput.value === ""){
        return true
    }else{
        return false
    }

    }
   
}

function showAlert (text){
    success.innerHTML = text;
    success.classList.replace("opacity-0", "opacity-100");
    success.classList.replace("success", "text-danger");
    setTimeout(() => {
      success.classList.replace("opacity-100", "opacity-0");

    }, 3000);
    clearInputs()
}

function checkEmailAndPassword(){
    for(var i=0 ; i< loginData.length ; i++ ){
        if(loginData[i].pass === passwordInput.value && loginData[i].email === emailInput.value){
            console.log(loginData[i]);
            localStorage.setItem("userName", loginData[i].name)
            return true
        }else {
            return false
        }
    }
}

