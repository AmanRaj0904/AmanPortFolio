// var typed = new Typed('.auto-input',{
//   Strings:["Aman Raj" , "Web Developer" , "Ui Designer"],
//   typeSpeed:100,
//   backSpeed:100,
//   loop:true
// });
// Can also be included with a regular script tag
var options = {
  strings: ["Aman Raj.", "Web Developer.", "Ui Designer.", "Web Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};

var typed = new Typed(".auto-input", options);

// Prelaoder
var preloader = document.getElementById("loading");
function myFunction() {
  preloader.style.display = "none";
}
function change()
{
    document.getElementById("Cv-btn").value="Working On !"; 
}