'use strict'

//VALIDACIÓ EMAIL I CONTRASENYA LOG-IN

function validateform(){  
  var email = document.contactForm.contactEmail.value;  
  var password = document.contactForm.contactPassword.value;  
  
  if (email == null || email == ""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length < 6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
  }  
} 

//VALIDACIÓ BUSCADOR

function validateSearch(){
  var searchbox = document.searchForm.searchBar.value;

  if(searchbox == null || searchbox.length < 3){
      alert("Write at least 3 characters to search");
      return false;
  }else{
      return true;
  }
}

//VALIDACIÓ FORMULARI DE REGISTRE

function registerValidation(){
  console.log("Funciona");
  
  var name = document.registerForm.inputName.value;
  var newEmail = document.registerForm.inputEmail.value;
  var passwordOne = document.registerForm.passwordOne.value;
  var passwordTwo = document.registerForm.passwordTwo.value;
  var city = document.registerForm.inputCity.value;
  var state = document.registerForm.inputState.value;

  if(name.length < 3){
    alert("Please introduce your name, minimum 3 characters.");
    return false;
  }
  if(newEmail == null || newEmail == ""){
    alert("Please introduce a valid email address.");
    return false;
  }
  if(passwordOne == "" || passwordOne.length < 6){
    alert("A valid password has to be at least 6 characters long.");
    return false;
  }
  if(passwordTwo != passwordOne){
    alert("Repeat your password.");
    return false;
  } 
  if(city == null || city == ""){
    alert("Enter your city");
    return false;
  }
  if(state == ""){
    alert("Select your country");
    return false;
  }
    return true;
}
