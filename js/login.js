// step- 1:  add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
        // step -2: get the email address inside the email input field
        // always remember to use .value to get text from an input field
        const emailField= document.getElementById('user-email');
        const email=emailField.value;
        // step -3: get password
        // a. set ir on html element
        // b. get the element
        // c. get the value from element

        const passwordField = document.getElementById('user-password');
        const password = passwordField.value;
        // Danger: DO not verify email password on the client side
        // step -4: verify email and password
        if (email === 'samirsadek@gmail.com' && password === 'samirsadek' ){
            window.location.href = 'bank.html';
        }
        else{
            alert('invalid user');
        }

    
});