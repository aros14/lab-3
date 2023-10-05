// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

var email_val = "";
var regexSimpleEmail = /@/;

$("#submitBtn").on("click",function(){
    email_val = $("input").val();
    if (validateEmail(email_val,regexSimpleEmail)){
        $("#result").addClass("isemail").show().html(`Your email ${email_val} is valid!`);
    }
    else{
        $("#result").removeClass("isemail").show().html(`Sorry, Your email ${email_val} is invalid!`);
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