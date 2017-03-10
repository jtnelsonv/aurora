/////////////////////////// SCROLLSPY SCRIPT ///////////////////////////
$(document).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar, .arrow",
        offset: 40
    });
    // Add smooth scrolling on all links inside the navbar
    $("#main-nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //This targets down arrow located in header
    $("#arrow a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

/////////////////////////// REVEAL SCRIPT ///////////////////////////
var onView = {
  duration: 1000,
  easing: 'ease-in-out',
  reset: true
  // true:  reveals occur every time elements become visible
  // false: reveals occur once as elements become visible
};

window.sr = ScrollReveal();
sr.reveal('.reveal', onView);
sr.reveal('.duration-reveal', {duration: 1500, reset: true}, 150);

/////////////////////////// LETTERING SCRIPT INIT ///////////////////////////
$(document).ready(function() {
    $(".aurora").lettering();
});

/////////////////////////// CAROUSEL SCRIPT ///////////////////////////
$('.carousel').carousel({
interval: 12000
});

/////////////////////////// MODAL SCRIPT ///////////////////////////
//Points to source anchor
var src = document.getElementById('srcLink');

//Points to source modal
var modal = document.getElementById('srcModal');

//Points to modal close button class
var close = document.getElementsByClassName('modal-close')[0];

//Onclick function to display modal
src.onclick = function() {
  modal.style.display = "block";
};

//Onclick function to close modal using close button
close.onclick = function() {
  modal.style.display = "none";
};

//Onclick function to close modal when user clicks
//outside of modal (anywhere in window)
window.onclick = function(event) {
  if(event.target === modal) {
    modal.style.display = "none";
  }
};
