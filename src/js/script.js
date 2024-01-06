// Function to display the date
function updateDate() {
  const now = new Date();
  const dateElem = document.getElementById("date");
  const date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  dateElem.innerText = date;
}

// Function to display the time with AM/PM
function updateTime() {
  const now = new Date();
  const timeElem = document.getElementById("time");
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const time = `${hours}:${minutes} ${ampm}`;
  timeElem.innerText = time;
}

// Function to display the location
function updateLocation() {
  const locationElem = document.getElementById("location");
  locationElem.innerText = "JAKARTA";
}

// Call the updateDate, updateTime, and updateLocation functions every second
setInterval(() => {
  updateDate();
  updateTime();
  updateLocation();
}, 1000);

// Call the functions initially to update the display when the page loads
updateDate();
updateTime();
updateLocation();

// Scroll to element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

// Navbar toggle
document.addEventListener("DOMContentLoaded", function () {
  const checkboxToggle = document.getElementById("checkbox_toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      scrollToElement(targetId);
      checkboxToggle.checked = false; // Close navbar menu after click
    });
  });
});

// SPACE
const images = document.querySelectorAll(".image-container img");
const popup = document.querySelector(".popup-image");
const popupImg = document.querySelector(".popup-img");
const closeButton = document.querySelector(".close-button");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.onclick = () => {
    currentImageIndex = index;
    showPopup(image.getAttribute("src"));
  };
});

function showPopup(src) {
  popup.style.display = "block";
  popupImg.src = src;
  document.querySelector(".navbar").style.display = "none";
}

function closePopup() {
  popup.style.display = "none";
  document.querySelector(".navbar").style.display = "flex";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showPrevImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
});

document.querySelector(".popup-image .close-button").onclick = closePopup;

document.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

document.addEventListener("keydown", (event) => {
  // Check if the event came from the keyboard
  if (event.isComposing || event.key === "Escape") {
    closePopup();
  }
});

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  popupImg.src = images[currentImageIndex].getAttribute("src");
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentImageIndex].getAttribute("src");
}

nextButton.onclick = showNextImage;
prevButton.onclick = showPrevImage;

// Run the redirectHome function when the page loads
window.addEventListener("DOMContentLoaded", redirectHome);

// Function to redirect users to the home page with a smooth effect
function redirectHome() {
  if (window.performance) {
    if (performance.navigation.type === 1) {
      // Redirect only if the page is refreshed
      const homeSection = document.getElementById("home");
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
