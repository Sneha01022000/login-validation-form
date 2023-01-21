var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username==null || username=="")
{ 
  alert("username can't be blank");  
  return false;  
}
if (password==null || password=="")
 { 
  alert("password can't be blank");  
  return false;  
}
if ( username == "Sneha" && password == "sneha#123")
{
  alert ("Login successfully");
}
else
{
  attempt --;
alert("invalid username and password");
alert("You have left "+attempt+" attempt!!!");
if( attempt == 0)
{
  alert("you have lost 3 attempts");
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
