'use strict'

//Al botó de submit del formulari fer que surti una alerta "Welcome + nom!"

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

/*
<form name="contact-form" action="#" method="POST" onsubmit="return validateform();"> 
      <!--email-->
      <label for="email">Email Adress</label><br>
      <input type="text" name="contact-email" id="email"  class="form-control form-control-lg" placeholder="reader@thebookstall.com ">
      <br><br>
      <!--password-->
      <label for="password">Password</label><br>
      <input type="text" name="contact-password" id="password" class="form-control form-control-lg" name="Password" placeholder="Introduce your password">
      <p id="note_pw" class="small-desc grey">Remember: The password must be minimum 6 characters long.</p>
      <br>
      <button type="submit" name="send" value="send details" class="btn btnModal">Log in</button>
  </form>
  */