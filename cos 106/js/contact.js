document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

if(name=="" || email=="" || phone=="" || message==""){

alert("Please fill in all fields.");

return;

}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email.");

return;

}

let phonePattern=/^[0-9]+$/;

if(!phonePattern.test(phone)){

alert("Phone number should contain only digits.");

return;

}

alert("Thank you! Your message has been sent.");

document.getElementById("contactForm").reset();

});