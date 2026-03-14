// Welcome message
window.onload = function(){
    console.log("Welcome to InternTrack!");
}

// Navbar background change on scroll
window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,0.6)";
    }else{
        nav.style.background = "transparent";
    }
});


// Button animation
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(()=>{
            btn.style.transform = "scale(1)";
        },150);
    });
});


// Register validation
function registerUser(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;

if(name === "" || email === "" || pass === ""){
alert("Please fill all fields");
return false;
}

alert("Registration Successful!");

// redirect to home page
window.location.href = "index.html";

return false;
}


// Login validation
function loginUser(){

let email = document.getElementById("loginEmail").value;
let pass = document.getElementById("loginPassword").value;

if(email === "" || pass === ""){
alert("Enter Email and Password");
return false;
}

alert("Login Successful!");

// redirect to home page
window.location.href = "index.html";

return false;

}