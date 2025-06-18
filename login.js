let userName = document.querySelector('.username')
let password = document.querySelector('.password')
let loginBtn = document.querySelector('.login-btn')
let errorMsg = document.querySelector('.error-msg')


let logInCredentials = [
  {
    id:1,
    name:"sanjay",
    password:1234
  },
  {
    id:2,
    name:"jeeva",
    password:2468
  },
  {
    id:3,
    name:"sathish",
    password:9876
  },
]

loginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let validateCre = logInCredentials.some((x) => x.name === userName.value && x.password === Number(password.value))

  if(userName.value == '' && password.value == ''){
    errorMsg.style.display = 'block'
    errorMsg.textContent = "Fill All Fields"
  }
  if(validateCre){
    window.location.href = "home.html" 
  }
  else{
    errorMsg.style.display = 'block'
    errorMsg.textContent = "Invalid Credentials"
    console.log("error");
  }
   if(userName.value.trim() < 3){
    errorMsg.style.display = 'block'
    errorMsg.textContent = "Username must contain 3 letters"
  }
  else if(password.value < 6){
    errorMsg.style.display = 'block'
    errorMsg.textContent = "password must contain 6 letters"
  }
})