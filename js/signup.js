let nameSign = document.getElementById('nameSign'),
    emailSign = document.getElementById('emailSign'),
    passwordSign = document.getElementById('passwordSign'),
    btnSignUp = document.getElementById('signup'),
    msgRequired = document.querySelector('.alert'),
    users = []

if(localStorage.getItem('usersData')){
    users = JSON.parse(localStorage.getItem('usersData'))
}

btnSignUp.addEventListener('click', function(){
    enterData()
})

/* Enter Data To Local Storage And Vaildate It */
function enterData(){
    let user = {
        name : nameSign.value,
        email : emailSign.value,
        password : passwordSign.value
    }
    if(nameSign.value === "" || emailSign.value === "" || passwordSign.value === ""){
        msgRequired.classList.add('animate__animated','animate__jackInTheBox','d-block')
        msgRequired.classList.remove('d-none')
        msgRequired.innerHTML = "Sorry, The Inputs Are Empty, Please Enter Your Data"
        nameSign.classList.add('is-invalid')
        emailSign.classList.add('is-invalid')
        passwordSign.classList.add('is-invalid')
    } else if(validationEmail() == true){
        if(checkData() == true){
            msgRequired.classList.add('animate__animated','animate__jackInTheBox','d-block')
            msgRequired.classList.remove('d-none')
            msgRequired.innerHTML = "Sorry, This Email Is Valid, Please Choose Another Email"
            nameSign.classList.remove('is-invalid')
            nameSign.classList.add('is-valid')
            emailSign.classList.add('is-invalid')
            passwordSign.classList.remove('is-invalid')
            passwordSign.classList.add('is-valid')
            } else{
            users.push(user)
            localStorage.setItem('usersData', JSON.stringify(users))
            window.location = './index.html'
            nameSign.classList.add('is-valid')
            emailSign.classList.add('is-valid')
            nameSign.classList.remove('is-invalid')
            emailSign.classList.remove('is-invalid')
            passwordSign.classList.remove('is-invalid')
            passwordSign.classList.add('is-valid')
            msgRequired.innerHTML = "Success"
        }
    }
}

/* Check Data If You Repeat Name Or Email */
function checkData(){
    for (let i = 0; i < users.length; i++) {
        if(emailSign.value == users[i].email){
            console.log('true')
            return true
        } else{
            console.log('false')
        }
    }
}

function validationEmail(){
    let text = emailSign.value
    let regex = /^\w{3,}@\w{2,}\..{2,}$/;

    if(regex.test(text) == true ){
        emailSign.classList.add('is-valid')
        emailSign.classList.remove('is-invalid')
        msgRequired.classList.replace('animate__jackInTheBox','animate__bounceOut')
        return true
    } else{
        emailSign.classList.add('is-invalid')
        emailSign.classList.remove('is-valid')
        passwordSign.classList.add('is-valid')
        nameSign.classList.add('is-valid')
        passwordSign.classList.remove('is-invalid')
        nameSign.classList.remove('is-invalid')
        msgRequired.innerHTML = "Please Enter Your Email Like 'example@ex.com'"
        msgRequired.classList.add('animate__animated','animate__jackInTheBox','d-block')
        msgRequired.classList.remove('d-none')
    }
}
