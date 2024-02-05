const password = document.getElementById('password-field');
const confirmPassword = document.getElementById('confirm-password-field');
const passwordMatch = document.getElementById('password-match-label');


function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {;
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        passwordMatch.hidden = false;
    }
    else {
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
        passwordMatch.hidden = true;
    }
}

password.addEventListener('input', checkPasswordMatch);
confirmPassword.addEventListener('input', checkPasswordMatch);