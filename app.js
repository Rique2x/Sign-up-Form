function confirmPass() {
    
    const pass = document.getElementById("password").value
    const confPass = document.getElementById("confirm-password").value
    
    if(pass != confPass) {
        //alert('Wrong confirm password !');
        document.getElementById('error').innerHTML='wrong confirm password';
    }
    else
    {
        document.getElementById('error').innerHTML='';
    }
}
