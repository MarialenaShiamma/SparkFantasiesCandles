let url = "https://ig.me/m/sparkfantasiescandles/";

// function callback(mutationList, observer) {
//   mutationList.forEach(function(mutation) {
//     if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//       // handle class change
//       console.log("michael :" + mutation.target.className);
//     }
//   })
// }

// const btn13 = document.querySelector('.lightwidget__lightbox')
// const options = {attributes: true}
// const observer = new MutationObserver(callback)

// Set an event listener on the document itself
document.addEventListener("click", function (event) {
  // Check to see if the event originated at an
  // element we want to handle.
  if (
    event.target.nodeName === "A" &&
    event.target.classList.contains("lightwidget__btn--cta")
  ) {
    // Just update the href of the element
    event.target.href = url;
    event.target.setAttribute("target", "_blank");
  }
  if (
    event.target.nodeName === "SPAN" &&
    event.target.classList.contains("lightwidget__lightbox-btn-text")
  ) {
    // Just update the href of the element
    event.target.parentElement.href = url;
    event.target.parentElement.setAttribute("target", "_blank");
  }
});

var pre = document.querySelector(".lightwidget__lightbox");

var in_dom = document.body.contains(pre);
// this can be wrapped into custom event
// it's left as a exercise for the reader
var observer = new MutationObserver(function (mutations) {
  if (pre.closest("body")) {
    // it will return null if not found
    if (!in_dom) {
      log("element inserted");
    }
    in_dom = true;
  } else if (in_dom) {
    in_dom = false;
    log("element removed");
  }
});
observer.observe(document.body, { childList: true });
