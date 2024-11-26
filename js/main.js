/* SignIn Variable */
let emailLog = document.getElementById('emailLog'),
    passwordLog = document.getElementById('passwordLog'),
    errorMsg = document.querySelector('.alert'),
    btnLogIn = document.getElementById('login'),
    storageDate = JSON.parse(localStorage.getItem('usersData'))

/* Submit To LogIn*/
btnLogIn.addEventListener('click',function(){
    callData()
})

/* Call Data Form LocalStorage And Check It When Enter Data */
function callData(){
    if(emailLog.value === "" || passwordLog.value === ""){
        emailLog.classList.add('is-invalid')
        passwordLog.classList.add('is-invalid')
        errorMsg.innerHTML = 'The Inputs Are Empty, Please Enter Your Email And Password'
        errorMsg.classList.add('animate__tada')
        errorMsg.style.cssText = `
            color : red;
            font-weight: bold;
        `
    } else{
        for (let i = 0; i < storageDate.length; i++) {
            if(emailLog.value == storageDate[i].email && passwordLog.value == storageDate[i].password){
                window.location = './page.html'
                localStorage.setItem('userName', JSON.stringify(storageDate[i].name))
                emailLog.classList.remove('is-invalid')
                emailLog.classList.add('is-valid')
                passwordLog.classList.remove('is-invalid')
                passwordLog.classList.add('is-valid')
                errorMsg.innerHTML = 'Very Good, Enjoy'
                errorMsg.style.cssText = `
                    color : green !important;
                    font-weight: bold;
                `
            } else{
                emailLog.classList.add('is-invalid')
                emailLog.classList.remove('is-valid')
                passwordLog.classList.add('is-invalid')
                passwordLog.classList.remove('is-valid')
                errorMsg.innerHTML = 'Sorry, Your Email And Password Is Invalid'
                errorMsg.classList.add('animate__tada')
                errorMsg.style.cssText = `
                    color : red;
                    font-weight: bold;
                `
            }
        }
    }
}