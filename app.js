function confirmPass() {
  const pass = document.getElementById("password").value;
  const confPass = document.getElementById("confirm-password").value;

  if (pass != confPass) {
    //alert('Password doesnt match!');
    document.getElementById("error").innerHTML = "Password doesnt match!";
  } else {
    document.getElementById("error").innerHTML = "";
  }
}
