function validation(){
    var Fullname = document .getElementById("Fullname") .value;
    var email = document .getElementById("email") .value;
    var title = document .getElementById("title") .value;
    var message = document .getElementById("message") .value;
    var errormessage = document .getElementById("errormessage");
 var text;
    errormessage.style.padding = "10px";

    if(Fullname.length <4) {
        text = "Please Enter A valid Name" ;
        errormessage.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter A valid Email" ;
        errormessage.innerHTML = text;
        return false;
    }
  
   
    
  
    if(message.length <= 20) {
        text = "Message should have a least 20 characters" ;
        errormessage.innerHTML = text;
        return false;
    }
alert("Form Submitted Successfully!")
    return true;
}