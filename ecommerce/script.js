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

