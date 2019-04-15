//VALIDACIÓ FORMULARI DE REGISTRE AMB JQUERY I BOOTSTRAP

$(document).ready(function() {
    console.log("jquery is ready");

    $.validator.setDefaults({
        errorClass: "text-danger",
        highlight: function(element){
            $(element)
                .addClass("is-invalid")
        },
        unhighlight: function(element){
            $(element)
                .removeClass("is-invalid")
        }
    });
    
    $.validator.addMethod("strongPassword", function(value, element){
      return this.optional(element)
        || value.length >= 6 //At least 6 char long
        && /\d/.test(value)
        && /[a-z]/i.test(value);
    }, 'Your password must be at least 6 characters long and contain at least a number and a character\.')
    
    $("#registerform").validate({
      rules: {
        inputName: {
            required: true,
            rangelength: [3,15],
            lettersonly: true
        },
        inputEmail: {
          required: true,
          email: true
        },
        passwordOne: {
          required: true,
          strongPassword: true
        },
        passwordTwo: {
          required: true,
          equalTo: "#passwordOne"
        },
        inputCity: {
            required: true,
            rangelength: [3,15],
            lettersonly: true
        },
        inputState: {
            required: true,
            
        },
      },

      messages: {
        inputName: {
            required: "Please enter your name.",
            rangelength: "Please enter at least 3 characters.",
            lettersonly: "Names have not numbers, unless you are an android..."
        },
        inputEmail: {
          required: "Please enter an email address.",
          email: "Please enter a valid email address."
        },
        passwordOne: {
            required: "Please enter an alphanumeric password with at least 6 characters.",
        },
        passwordTwo: {
            required: "Please repeat the password.",
            error: "The password must be the same."
        },
        inputCity: {
            required: "Please enter your city.",
            rangelength: "Please enter at least 3 characters.",
            lettersonly: "Please do not type numbers."
        },
        inputState: {
            required: "Please select your state.",
        },
      }
    });
  
  
  
  });
  
  