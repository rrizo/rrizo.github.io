//on page scroll
window.onscroll = function(){
    
    //select the element to modify
    var header = document.getElementById("header");
    
    //if scrolled more than 30 pixels
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
   header.classList.add("shrink");
      
      
    //less than 30 pixels, resets
  } else {
   header.classList.remove("shrink");
  }
}