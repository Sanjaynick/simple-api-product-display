var  subContainer = document.getElementById("sub-container");
var slider = document.getElementById("slider")
var sliderBtn = document.getElementById("sign-btn");
var signInContainer = document.getElementById("signin-content");
var logInContainer = document.getElementById("login-content");
var Greating = document.querySelector('.greating');
var aboutAccount = document.querySelector('.account');
var inputClear = document.querySelectorAll('input');
var email = document.getElementById('email');
var errorMessage = document.getElementById('error-message');
var errorMsg = document.getElementById('error-msg-2');
var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userPassword = document.getElementById('user-password');
var newPassword = document.getElementById('new-password');
var container = document.getElementById("container");
var messageContainer = document.getElementById("message-container");
var subMessageContainer = document.getElementById("sub-message-container");
var subVerificationContainer = document.getElementById("sub-verification-container");
var subRepasswordContainer = document.getElementById("sub-repassword-container");
var forgotProcess = document.getElementById("forgot-process");
var verificationCode = document.getElementById("verification-code");
var forgotEmail = document.getElementById("forgot-email");
var forgotCode = document.getElementById("forgot-code");
var forgotRePassword = document.getElementById("forgot-repassword");
var newPsw = document.getElementById("new-psw");
var reNewPsw =document.getElementById("re-new-psw"); 


var checkEmail = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

function forgotPassword(){
    if(!checkEmail.test(forgotEmail.value.trim())){
        forgotProcess.textContent = "Please Enter Valid Email !"
        forgotProcess.style.display = 'block';
        // subMessageContainer.style.display = 'none';
        //  subVerificationContainer.style.display = 'block';
    }
    else{
        forgotProcess.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'block';
    }
    allClear();
    return false;
}

function forgotVerification(){
    if(verificationCode.value.trim().length < 6){
        forgotCode.textContent = "Verification Code must be 6 Numbers";
        forgotCode.style.display = 'block';
    }
    else{
        forgotCode.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'none';
          subRepasswordContainer.style.display = 'block';
    }
    allClear();
    return false;
}

function reEnterPassword(){
    if(newPsw.value.trim().length < 6){
        forgotRePassword.textContent = "Password must be 6 Numbers";
        forgotRePassword.style.display = 'block';
    }
   else if(newPsw.value != reNewPsw.value){
         forgotRePassword.textContent = "Password Not Match";
        forgotRePassword.style.display = 'block';
    }
    else{
        forgotRePassword.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'none';
          subRepasswordContainer.style.display = 'none';
           messageContainer.style.display = 'none';
          alert("Your Password Changed Successfully")
    }
    allClear();
    return false;
}

function cancelShowForgot(){
     messageContainer.style.display = 'none';
    subMessageContainer.style.display = 'none';
    subVerificationContainer.style.display = 'none';
    subRepasswordContainer.style.display = 'none';
}

function showForgot(){
    messageContainer.style.display = 'block';
    subMessageContainer.style.display = 'block';
    subVerificationContainer.style.display = 'none';
    subRepasswordContainer.style.display = 'none';
}

function showError(){
    errorMessage.style.display = 'block';
   
}
 sliderBtn.textContent = "Sign In";

 function allClear(){
    inputClear.forEach(clear => {
        clear.value = '';
    });
 }

function changeSlider(){
    if(sliderBtn.textContent == "Sign In"){
        slider.classList.add('slider-move');
        subContainer.classList.add('sub-container-move');
        slider.classList.remove('slider-move-right');
        subContainer.classList.remove('sub-container-move-left');
        sliderBtn.textContent = "Log In";
        signInContainer.style.display = 'grid';
        logInContainer.style.display = 'none';
        errorMessage.style.display = 'none';
         Greating.textContent = "Welcome Back";
        aboutAccount.textContent = "Already have an Account";
        allClear();
    }
    else if(sliderBtn.textContent == "Log In"){
        slider.classList.add('slider-move-right');
        subContainer.classList.add('sub-container-move-left');
        slider.classList.remove('slider-move');
        subContainer.classList.remove('sub-container-move');
        sliderBtn.textContent = "Sign In";
        logInContainer.style.display = 'grid';
        signInContainer.style.display = 'none';
        errorMessage.style.display = 'none';
       Greating.textContent = "Hi There !";
        aboutAccount.textContent = "Don't have an Account";
    }

    allClear();
}

var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

   // var email = document.getElementById('email');
    var passwords = document.getElementById('password');
    let loginBtn = document.querySelector('.login-btn')

    loginBtn.addEventListener('click', (e) => {
        //  formValidation()
        e.preventDefault()
       
         fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then((data) => {
        let a = data.some((val) => {
            return val.email === email.value && val.password === Number(passwords.value)
        })
        if(a){
            window.location.href = 'home.html'
            email.value = ''
            passwords.value = ''
        }
        if(email.value == '' && passwords.value == ''){
            errorMessage.textContent = "Enter Credentials!";
            errorMsg.textContent = "Enter Credentials !";
            showError();
            errorMsg.style.display = 'block'
        }
        else{
             errorMessage.textContent = "Invalid Credentials!";
            errorMsg.textContent = "Invalid Credentials !";
            showError();
            errorMsg.style.display = 'block'
            console.log("Error");            
        }
         
    })
    })

// var userName = document.getElementById('user-name');
// var userEmail = document.getElementById('user-email');
// var userPassword = document.getElementById('user-password');
var userNewPassword = document.querySelector('.new-password')
var signinBtn = document.querySelector('.singin-btn')

signinBtn.addEventListener('click', (s) => {
    s.preventDefault()

    const userData={
        name: userName.value,
        email: userEmail.value,
        password: Number(userPassword.value)
    }

    let allInput = [
        userName.value,
        userEmail.value,
        userPassword.value,
        userNewPassword.value
    ]

      let m = allInput.some(input => input === '')


    if(m){
        errorMessage.textContent = "Please Enter All Fields";
             errorMsg.textContent = "Please Enter All Fields"
             showError();
             errorMsg.style.display = 'block'
    }
    else{
        fetch('http://localhost:3000/user',{
        method: "post",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then((data) => {
        console.log("success",data);
        alert("Signup successfully")
    })
    .catch(error => {
        console.log("Error:",error);
        alert("signup Failed")
    })
        errorMsg.style.display = 'none'
        
    }
       
})

                        // Script For Responsive mobile screen 

                //   Adding p tag to login page

var word = document.getElementById("word");
 var p = document.createElement('p');
 var span = document.createElement('span');
 p.id = 'new-p';
 span.id = 'login-span';
 let loginMessageAdded = false;

function adding(){
    if(window.innerWidth <= 500 && !loginMessageAdded){  
        p.innerHTML = `Don't have an account ` ;
        span.innerHTML = `SignIn`;
        word.appendChild(p);
        word.appendChild(span);
          loginMessageAdded = true;
          
    }
    else if(window.innerWidth > 500 && loginMessageAdded){
          var newPara = document.getElementById("new-p");
          var newSpan = document.getElementById("login-span");      
        if(newPara && newSpan){   
            newPara.remove();
            newSpan.remove();
               loginMessageAdded = false; 
        }
    }
    }

  window.addEventListener('resize', adding);
  window.addEventListener('load', adding);

                    // Adding p and span tag to sign in page

  var words = document.getElementById("words");
 var pa = document.createElement('p');
 var spans = document.createElement('span');
 pa.id = 'new-pa';
 spans.id = 'signin-span';
 let messageAdded = false;

function addingFlip(){

    if(window.innerWidth <= 500 && !messageAdded){  
        pa.innerHTML = `Already have an account ` ;
        spans.innerHTML = `Log In`;
        words.appendChild(pa);
        words.appendChild(spans);
          messageAdded = true;
    }
    else if(window.innerWidth > 500 && messageAdded){
          var newParas = document.getElementById("new-pa");
          var newSpans = document.getElementById("signin-span");
           errorMsg.style.display = 'none';
        if(newParas && newSpans){   
            newParas.remove();
            newSpans.remove();
               messageAdded = false;  
        }
    }
    }

  window.addEventListener('resize', addingFlip);
  window.addEventListener('load', addingFlip);

                    // Flip to Signin page in responsive design

var logInSpan = document.getElementById("login-span");

    span.onclick = function(){
 subContainer.classList.toggle('flip');
    signInContainer.style.display = 'grid';
    //  errorMsg.style.display = 'none';
    };
      // Flip to Login page in responsive design

      var signInSpan = document.getElementById("signin-span");

    spans.onclick = function(){
 subContainer.classList.toggle('flip');
    logInContainer.style.display = 'grid';
    signInContainer.style.display = 'grid';
        //  errorMsg.style.display = 'none';
    };



 
