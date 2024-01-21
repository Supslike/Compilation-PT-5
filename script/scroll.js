var reveals = document.querySelectorAll(".reveal");
var slow = document.querySelectorAll(".slow");
var navigation = document.getElementById("navigate2");

function parallax() {
    if (window.scrollY > 200) {
        navigation.style.display = "flex";
    }

    else {
        navigation.style.display = "none";
    }

    for (var i = 0; i < slow.length; i++) {
        slow[i].style.top = 0.2 * window.scrollY + "px";
    }

    // Loop through elements with class "reveal"
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        // Check if the element is within the visible range
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Event listener for scroll event, calling the reveal function
window.addEventListener("scroll", parallax);