const registration = document.getElementsByClassName('registration')
const regUser = document.getElementById('username')
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const submit = document.getElementById('submit')


registration.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    if(!email.contains('example.com')){
        alert('Invalid email')
        return false
    }
    if(password.contains('password')){
        alert('Invalid password')
        return false
    }
});



