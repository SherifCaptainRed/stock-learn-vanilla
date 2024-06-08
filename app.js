// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// // Get all the modals
// var modals = document.querySelectorAll('.modal');

// // Get all the buttons that open the modals
// var btns = document.querySelectorAll(".explore-button");

// // Get all the <span> elements that close the modals
// var spans = document.querySelectorAll(".close");

// // When the user clicks a button, open the corresponding modal 
// btns.forEach((btn, i) => {
//   btn.onclick = function() {
//     modals[i].style.display = "block";
//     document.body.style.overflow = 'hidden'; // Prevent scrolling on the webpage
//   }
// });

// // When the user clicks on a <span> (x), close the corresponding modal
// spans.forEach((span, i) => {
//   span.onclick = function() {
//     modals[i].style.display = "none";
//     document.body.style.overflow = 'auto'; // Allow scrolling on the webpage
//   }
// });

// // When the user clicks anywhere outside of a modal, close it
// window.onclick = function(event) {
//   modals.forEach((modal, i) => {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       document.body.style.overflow = 'auto'; // Allow scrolling on the webpage
//     }
//   });
// }
