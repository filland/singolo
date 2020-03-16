// select nav menu
let navItems = document.querySelectorAll(
  "#nav-sections-list > li:not(.menu-dot)"
);
navItems.forEach(item => {
  item.addEventListener("click", e => {
    navItems.forEach(item =>
      item.firstChild.classList.remove("selected-nav-item")
    );
    item.firstChild.classList.add("selected-nav-item");
  });
});


//  ==========================================================================
// slider
const slider = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll(".slider-item");

let counter = 0;
const size = sliderItems[0].clientWidth;
transitionSlide();

function transitionSlide() {
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function changeCurrentItem(n) {
  counter = (n + sliderItems.length) % sliderItems.length;
}

const nextSlide = document.getElementById("nextSlide");
nextSlide.addEventListener("click", e => {
  if(counter === 1) {
    slider.style.transform = 'translateX(' + (2 * (-size) * counter) + 'px)';
  } else {
    slider.style.transition = "transform 0.4s ease-in-out";
  }
  changeCurrentItem(counter + 1);
  transitionSlide();
});

const previousSlide = document.getElementById("previousSlide");
previousSlide.addEventListener("click", e => {
  slider.style.transition = "transform 0.4s ease-in-out";
  changeCurrentItem(counter - 1);
  transitionSlide();
});


//  ==========================================================================
// vertical and horizontal phone screens
let verticalPhone = document.querySelector(".vertical-iphone");
let verticalPhoneTurnedOn = true;

let horizontalPhone = document.querySelector(".horizontal-iphone");
let horizontalPhoneTurnedOn = true;

document.body.addEventListener("click", e => {
  if (verticalPhone.contains(e.target)) {
    let screen = document.getElementById("vertical-iphone-screen-id");

    if (verticalPhoneTurnedOn) {
      screen.style.display = "none";
      verticalPhoneTurnedOn = false;
      console.log("hide");
    } else {
      screen.style.display = "block";
      verticalPhoneTurnedOn = true;
      console.log("show");
    }
  }

  if (horizontalPhone.contains(e.target)) {
    let screen = document.getElementById("horizontal-iphone-screen-id");

    if (horizontalPhoneTurnedOn) {
      screen.style.display = "none";
      horizontalPhoneTurnedOn = false;
    } else {
      screen.style.display = "block";
      horizontalPhoneTurnedOn = true;
    }
  }
});

//  ==========================================================================
//  portfolio
let portfolioTopics = document.querySelectorAll(".portfolio ul li");
let currentTopic = portfolioTopics[0];
// default selected topic
currentTopic.classList.add("topic-selected");

let images = document.querySelectorAll(".portfolio .images img");

portfolioTopics.forEach(topic => {
  topic.addEventListener("click", e => {
    if (currentTopic != e.target) {
      currentTopic = topic;

      portfolioTopics.forEach(t => t.classList.remove("topic-selected"));
      topic.classList.add("topic-selected");

      let imagesUrls = [];
      images.forEach(img => imagesUrls.push(img.src));
      images.forEach(img => (img.src = imagesUrls.pop()));
    }
  });
});


//  ==========================================================================
// select image
images.forEach(img => {

    img.addEventListener("click", e => {
        images.forEach(img => img.classList.remove("portfolio-image-selected"));
        img.classList.add("portfolio-image-selected");
    });
});


//  ==========================================================================
// handle contanct form submission
let contactForm = document.getElementById("contact-form-id");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();

    let subject = document.getElementById("contact-subject");
    let description = document.getElementById("contact-description");

    if(subject.value) {
        document.getElementById("subj").innerText = "Subject: " + subject.value;
    }
    
    if(description.value) {
        document.getElementById("desc").innerText = "Description: " + description.value;
    }

    showDialog();
})
document.getElementById("dialog-ok-button").addEventListener("click", e => {
    hideDialog();
});
function showDialog() {
    document.querySelector(".dialog-window-container").style.display = 'flex';
}
function hideDialog() {
    let el = document.querySelector(".dialog-window-container");
    el.style.display = 'none';
    document.getElementById("subj").innerText = "";
    document.getElementById("desc").innerText = "";
}