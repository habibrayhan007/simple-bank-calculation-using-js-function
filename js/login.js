document.getElementById('login-submit').addEventListener('click', function(){

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log(userPassword);

    //check email and password
    if(userEmail == 'habib@gmail.com' && userPassword == 'habib'){
        window.location.href = 'banking.html';
    }    
});