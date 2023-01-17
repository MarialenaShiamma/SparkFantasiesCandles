let url = "https://ig.me/m/sparkfantasiescandles/";

// Set an event listener on the document itself
document.addEventListener("click", function(event){
  // Check to see if the event originated at an
  // element we want to handle.
  if(event.target.nodeName === "A" && event.target.classList.contains("lightwidget__btn--cta")){
    // Just update the href of the element
    event.target.href = url;
  }
});
