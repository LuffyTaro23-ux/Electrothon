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
// function registerUser(){
// let name = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let pass = document.getElementById("password").value;

// if(name === "" || email === "" || pass === ""){
// alert("Please fill all fields");
// return false;
// }

// alert("Registration Successful!");

// // redirect to home page
// window.location.href = "index.html";

// return false;
// }

function registerUser(event) {

    event.preventDefault(); // stop form from refreshing

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())       // changed from .text() to .json()
    .then(data => {
        if (data.message === "success") {
            alert("Registration Successful");
            window.location.href = "index.html";
        } else {
            alert("Registration failed: " + data.message);
        }
    })
    .catch(error => {
        console.log(error);
        alert("Something went wrong. Check the console.");
    });

}

// Login validation
function loginUser(event){

event.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
email: email,
password: password
})

})

.then(response => response.json())

.then(data => {

if(data.status === "success"){

alert("Login Successful");

// save login state
localStorage.setItem("loggedIn","true");

// go back to homepage
window.location.href = "index.html";

}

else{

alert("Invalid Email or Password");

}

})

.catch(error => console.log(error));

}