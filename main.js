const registration = document.getElementById('registration')
const regUser = document.getElementById('username')
const email = document.getElementById('email')
const pass = document.getElementById('registration-password')
const confirmPass = document.getElementById('password-confirm').value
const Confirm = document.getElementById('password-confirm')


registration.addEventListener('submit', (e) => {
    const testPassword = this.password.value
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

    
    function validatePassword(input){
        const wordPass = 'password'
        const password = document.getElementById('registration-password').value
        console.log(input)
        if(input.toLowerCase().includes(wordPass)){
            alert("Password can not contain the word 'password'")
            pass.focus()
            return false
        }
        if(password === regUser){
            alert("Password can not contain the username")
            pass.focus()
            return false
        }
        if(!password === confirmPass){
            alert("Password must match Confirm Password")
            Confirm.focus()
            return false
        }

        console.log(password)
        return password

    }

    const passwordValidation = validatePassword(password)
    if(passwordValidation == false){
        e.preventDefault()
        return false 
    }

    function local (){
        if(!passwordValidation==false){
            localStorage.setItem(password)
        }
        if(!emailValidation == false){
            localStorage.setItem(email)
        }
    }
    

});



