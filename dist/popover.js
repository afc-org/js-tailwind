const togglePopper = e => {
  let marginClass;

  const element             = e.currentTarget;
  const popperID            = element.getAttribute("data-target");
  let placement             = element.getAttribute("data-placement");
  const popperElement       = document.querySelector(popperID);
  const popperInnerElement  = popperElement.querySelector("div");

  Popper.createPopper(element, popperElement, {
    placement: (placement ? placement : "right")
  });

  switch (placement) {
    case "bottom":
      marginClass = "mt-3";
      break;
    case "top":
      marginClass = "mb-3";
      break;
    case "left":
      marginClass = "mr-3";
      break;
    case "right":
      marginClass = "ml-3";
      break;
  }

  if (popperElement.classList.contains("hidden")) {
    fadeIn(popperElement, 200);
    popperElement.classList.remove("hidden");
    popperInnerElement.classList.add(marginClass);
  } else {
    fadeOut(popperElement, 200);
    
    setTimeout(() => {
      popperElement.classList.add("hidden");
      popperInnerElement.classList.remove(marginClass);
    }, 180);
  }
}

const initPopovers = () => {
  const popoverData = document.querySelectorAll("[data-toggle='popover']");

  for (let i of popoverData) i.addEventListener("click", togglePopper);
}