function togglePopper(event){
  let element = event.currentTarget;
  let popperID = element.getAttribute("data-target");
  let placement = element.getAttribute("data-placement");
  let popperElement = document.querySelector(popperID);
  let popperInnerElement = popperElement.querySelector("div");
  let popper = Popper.createPopper(element, popperElement, {
    placement: (placement ? placement : 'bottom')
  });
  popperElement.classList.toggle("hidden");
  placement = popper.state.placement
  let marginClass;
  switch (placement) {
    case "bottom":
      marginClass = "mt-3"
      break;
    case "top":
      marginClass = "mb-3"
      break;
    case "left":
      marginClass = "mr-3"
      break;
    case "right":
      marginClass = "ml-3"
      break;
    default:
      break;
  }
  popperInnerElement.classList.toggle(marginClass);
}

function initPopovers(){
  let popoverData = document.querySelectorAll("[data-toggle='popover']");
  for (var index = 0; index < popoverData.length; index++) {
    popoverData[index].addEventListener("click",togglePopper);
  }
}

(function () {
  initPopovers();
}());
