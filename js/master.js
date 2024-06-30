var slideImage = Array.from(document.querySelectorAll(".slide-container img"));
var slideCount = slideImage.length;
var currentSlide = 1;
var slideNumber = document.querySelector(".slide-container .slide-number");
var prevButtom = document.getElementById("prev");
var nextButtom = document.getElementById("next");

prevButtom.onclick = prevSlide;
nextButtom.onclick = nextSlide;

var pagElement = document.createElement("ul");
pagElement.setAttribute("id", "pagination-ul")
for (let i = 1; i <= slideCount; i++) {
    var pagItem = document.createElement("li");
    pagItem.setAttribute("data-index", i);
    pagItem.appendChild(document.createTextNode(i));
    pagElement.appendChild(pagItem);
}
document.getElementById("indicators").appendChild(pagElement);
var pagCreatedUl = document.getElementById("pagination-ul");
var pagArray = Array.from(pagCreatedUl.children);

for (let i = 0; i < slideCount; i++) {
    pagArray[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}

theChecker();

function prevSlide() {
    if (currentSlide == 1) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
function nextSlide() {
    if (currentSlide == 5) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
function theChecker() {
    removeAllActive();
    slideNumber.textContent = `Slide #${currentSlide} of ${slideCount}`;
    slideImage[currentSlide - 1].classList.add("active");
    pagArray[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevButtom.classList.add("disabled");
    } else {
        prevButtom.classList.remove("disabled");
    }
    if (currentSlide == 5) {
        nextButtom.classList.add("disabled");
    } else {
        nextButtom.classList.remove("disabled");
    }
}
function removeAllActive() {
    slideImage.forEach((img) => {
        img.classList.remove("active");
    });
    pagArray.forEach((p) => {
        p.classList.remove("active");
    })
}