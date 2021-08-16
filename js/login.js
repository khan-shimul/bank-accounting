document.getElementById('login-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const userEmail = emailInput.value;
    // get user pass
    const passwordInput = document.getElementById('password-input');
    const userPassword = passwordInput.value;

    if (userEmail == 'sim@gmail.com' && userPassword == '123') {
        window.location.href = 'others/account.html';
    }
});