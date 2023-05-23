
function validation(){
let user = document.getElementById('user').value;
let pass = document.getElementById('pass').value;
let conpas = document.getElementById('pswd').value;
let num = document.getElementById('num').value;
let email = document.getElementById('emails').value;

if (user==""){document.getElementById('username').innerHTML="*fill again*"
 return false;}

 if ((user.length<=2)||(user.length >=10)){document.getElementById('username').innerHTML="*lenght must be between 2 and 10*"
 return false;}

 if (!isNaN(user)){document.getElementById('username').innerHTML="*characters are allowed only*"
 return false;}

if (pass==""){document.getElementById('passwords').innerHTML="*mandatory field*"
 return false;}

  
if (conpas==""){document.getElementById('conpswd').innerHTML="*mandatory field*"
   return false;}

if (pass!=conpas){document.getElementById('conpswd').innerHTML="*password not match*"
   return false;}

   if ((pass.length<=2)||(pass.length>=10)){document.getElementById('passwords').innerHTML="*lenght must be between 2 and 10*"
     return false;}
     
   if (num==""){document.getElementById('mobileno').innerHTML="*Mandatory field*"
      return false;}
   
 if (isNaN(num)){document.getElementById('mobileno').innerHTML="*Numericals are allowed only*"
 return false;}


  if (num.length!=10){document.getElementById('mobileno').innerHTML="*lenght must be 10*"
  return false;}


  if (email==""){document.getElementById('emailids').innerHTML="*Mandatory field*"
  return false;}

  if (email.indexOf('@')<=0){document.getElementById('emailids').innerHTML="*wrong position field*"
  return false;}

  if ((email.charAt(email.length -4)!='.') && (email.charAt(email.length -2)!='.')){document.getElementById('emailids').innerHTML="*Invalid Position*"
  return false;}

}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
