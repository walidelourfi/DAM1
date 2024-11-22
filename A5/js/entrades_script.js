document.addEventListener('DOMContentLoaded', function() {
    const createAccountButton = document.getElementById('createAccount');

    createAccountButton.addEventListener('click', function() {
        const pass1 = document.getElementById('password').value;
        const pass2 = document.getElementById('password2').value;

        if (pass1 !== pass2 || pass1.length < 8) {
            showAlert();
        } else {
            // Proceed with account creation
            alert('Compte Creat!');
        }
    });

    function showAlert() {
        alert('La contrasenya no coincideix o es menor de 8 caracters');
    }
});