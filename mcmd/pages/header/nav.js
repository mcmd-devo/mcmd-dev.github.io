// ----------------- NAVBAR INSERT -----------------

const navbarHtml = "/mcmd/pages/header/nav.html";
const navbarCss = "/mcmd/pages/header/nav.css";

async function includeNavbar() {
      // Create a link element for the navbar CSS file
    const navbarLink = document.createElement("link");
    navbarLink.rel = "stylesheet";
    navbarLink.href = navbarCss;
  
    // Insert the navbar link into the head of the document
    const head = document.querySelector("head");
    head.appendChild(navbarLink);

    // Get the navbar HTML file
    const response = await fetch(navbarHtml);
    const data = await response.text();
  
    // Insert the navbar HTML into the navbar div
    const navbarDiv = document.getElementById("navbar");
    navbarDiv.innerHTML = data;
  }

includeNavbar();

// ----------------- NAVBAR FUNCTIONALITY -----------------

let hamburger = null
let dropdown = null

const checkHamburger = setInterval(function() {

  hamburger = document.querySelector('.hamburger');
  dropdown = document.querySelector('.dropdown');
  if (!hamburger) {return;}

  clearInterval(checkHamburger);
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    dropdown.classList.toggle('is-active');
  });
}, 100);

