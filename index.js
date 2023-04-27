window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "#485461";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}