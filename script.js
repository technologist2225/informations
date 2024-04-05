var prevScrollpos = window.pageYOffset; 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".toolbar").style.top = "0"; 
  } else {
    document.querySelector(".toolbar").style.top = "-60px"; 
  }

  prevScrollpos = currentScrollPos;
};