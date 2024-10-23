const registration = document.getElementById('registration')
const regUser = document.getElementById('username').value
const email = document.getElementById('email')
const password = registration.elements['password'].value
const pass = document.getElementById('registration-password')
const confirmPass = document.getElementById('password-confirm').value



registration.addEventListener('submit', (e) => {
    // e.preventDefault();

    function validateEmail(){
        let emailValue = email.value;
        const atsign = emailValue.indexOf("@")
        const dot = emailValue.lastIndexOf(".")

        if(atsign < 1){
            alert("Email must include @ symbol")
            email.focus();
            return false
        }

        if (dot - atsign < 2){
            alert("Invalid format; '.' symbol must be at least 2 characters away from @ symbol")
            email.focus()
            return false
        }
        if(emailValue.includes("@example.com")){
            alert("Email format can not contain '@example.com'")
            email.focus()
            return false;
        }
        return emailValue

    }

    const emailValidation = validateEmail()
    if(emailValidation == false){
        // e.returnValue = false
        e.preventDefault()
        return false
    }

    
    function validatePassword(){
        const passRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/
        const regextest = passRegex.test(password)
        console.log(password)
        console.log("before "+ regextest)
        if(!regextest){
            console.log("after "+ regextest)
            alert("Password must contain special character")
            password.focus()
            return false
        }
        if(password.includes("password")){
            alert("Password can not contain the word 'password'")
            pass.focus()
            return false
        }
        if(password.includes(regUser)){
            alert("Password can not contain username")
            pass.focus()
            return false

        }
        if(){
            alert("Password can not contain username")
            pass.focus()
            return false
        }

    }

        return password


    const passwordValidation = validatePassword()
    if(passwordValidation == false){
        e.preventDefault()
        return false 
    }
    

});



