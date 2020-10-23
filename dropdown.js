const toggleDropdown = e => {
  let marginClass;

  const element             = e.currentTarget;
  const popperID            = element.getAttribute("data-target");
  const placement           = element.getAttribute("data-placement");
  const popperElement       = document.querySelector(popperID);
  const popperInnerElement  = popperElement.querySelector("div");

  Popper.createPopper(element, popperElement, {
    placement: (placement ? placement : 'bottom')
  });

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
  }

  if (popperElement.classList.contains("hidden")) {
    dropdownIn(popperElement);

    popperElement.classList.remove("hidden");
    popperInnerElement.classList.add(marginClass);
  } else {
    dropdownOut(popperElement);
    
    setTimeout(() => {
      popperElement.classList.add("hidden");
      popperInnerElement.classList.remove(marginClass);
    }, 300);
  }
}

const initDropdown = () => {
  const dropdownData = document.querySelectorAll("[data-toggle='dropdown']");
  
  for (let i of dropdownData) i.addEventListener("click",toggleDropdown);
}