// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

/*source for this jquery:
https://www.abstractapi.com/guides/validate-email-address-jquery#email-validation-using-jquery-simple-method
*/
var email_val = "";
var regexSimpleEmail = /@/;

$("#submit").on("click",function(){
    email_val = $("input").val();
    if (validateEmail(email_val,regexSimpleEmail)){
        $("#result").addClass("isemail").show().html(`Your email is valid!`);
    }
    else{
        $("#result").removeClass("isemail").show().html(`Sorry, Your email is invalid! Please try again.`);
    }
});


function validateEmail(email_val,emailRegex){
    if (emailRegex.test(email_val)){
        return true;
    }
    else {
        return false;
    }
}

$("#clear").on("click",function(){
    $("#result").hide().html('')
    $("#inputemail").val("");
})