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
