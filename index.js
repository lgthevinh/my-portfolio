window.onscroll = function(){
  scrollFunction();
  fadeUp()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "#485461";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

function fadeUp(){
  var fadeUp = document.querySelectorAll(".fade-up");
  console.log(fadeUp);
  for(let i = 0; i < fadeUp.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = fadeUp[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if(elementTop < windowHeight - elementVisible){
      fadeUp[i].classList.add("animation-fade-up")
    }
  }
}
function toggleNavbar(){
  document.getElementById("navbar").classList.toggle("show");
}