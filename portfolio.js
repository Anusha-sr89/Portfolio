// Sticky Navigation Menu Js
function saveDataToExcel() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && age && message) {
      const data = [{ Name: name, MailID: email, Message:message }];
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "DataSheet");
      XLSX.writeFile(wb, "data.xlsx");
  } else {
      alert("Please enter all fields before submitting.");
  }
}

function showForm() {
  var formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
  // You can add code here to handle the form submission
  // For example, you can collect the form data and perform some action.
  alert("Form submitted!");
});


let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;


window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}




// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

