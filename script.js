const validate= document.querySelector('.validate')

  function checkPassword(form) {
 
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

  
    if (password != confirmPassword) {
      validate.textContent = "Error! Password did not match.";
      return false;
    } else {
        validate.textContent = "Password Match. Congratulations!";
      return true;
    }
  }


