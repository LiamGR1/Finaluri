var nameError = document.getElementById('name-error');
var passwordError = document.getElementById('password-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var passwordError1 = document.getElementById('password-error1');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (name.match(/^[A-Za-z]*\s{1}[A-Za-a]*&/)){
        nameError.innerHTML = 'Write Full name';
        return false;
    }
    nameError.innerHTML = 'Correct!';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0){
        phoneError.innerHTML = 'Phone num is Required';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone num is Required';
        return false;
    }
    phoneError.innerHTML = 'Correct!';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if (email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email invalid';
    return false;
    }
    emailError.innerHTML = 'Correct!';
    return true;
}
function validatePassword() {
    var password = document.getElementById('contact-password').value;

    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[A-Z]/) && password.match(/[!,@,#,$,%,^,&,*,?,_,~,`,(,)]/)) {
        passwordError.innerHTML = 'Password is very strong';
        return false;
    }
    if (password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[A-Z]/)) {
        passwordError.innerHTML = 'Password is strong';
        return false;
    }
    if (password.match(/[a-z]/) && password.match(/[0-9]/)) {
        passwordError.innerHTML = 'Password is medium';
        return false;
    }
    if (password.match(/[a-z]/)){
        passwordError.innerHTML = 'Password is weak';
        return false;
    }
}

function validatePasswordAgain() {
    var password = document.getElementById('contact-password').value;
    var password1 = document.getElementById('contact-password1').value;
  
    
    if (password1.length != 0) {
        if (password1 == password) {
            passwordError1.innerHTML = 'Passwords match';
            return true;
        }else {
            passwordError1.innerHTML = 'Passwords do not match';
        }
    }
}