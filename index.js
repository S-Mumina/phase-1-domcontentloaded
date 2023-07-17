// Adding event listener 
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

console.log("The DOM content loads");

window.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("text");
    paragraph.textContent = "This is really cool!";
  });
