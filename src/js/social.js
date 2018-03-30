// Force a hover to see the effect
var social = document.getElementsByClassName('social')[0];

setTimeout(function () {
  social.classList.add("hover");
}, 1000);

setTimeout(function () {
  social.classList.remove("hover");
}, 3000);
