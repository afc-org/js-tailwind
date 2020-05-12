function changeAtiveTab(event,activeClasses,normalClasses){
  event.preventDefault();
  // prepare classes for querySelectorAll and classList.remove/add
  normalClasses = normalClasses.split(" ").filter(item => item !== " " && item !== "");
  activeClasses = activeClasses.split(" ").filter(item => item !== " " && item !== "");
  let queryActiveClasses = activeClasses.map(item => "." + item);
  // get the anchor element with the data-toggle="tab" that has been clicked
  let element = event.currentTarget;
  let elementID = event.currentTarget.getAttribute("href");
  // get it's counterpart tab element
  let tabElement = document.querySelector(elementID);
  // get the unordered list parent (grand-parent actualy)
  let ulElement = element.parentNode.parentNode;
  // get the current active element
  let activeElement = ulElement.querySelector("li > a" + queryActiveClasses);
  let activeElementID = activeElement.getAttribute("href");
  // get the current active tab element
  let activeTabElement = document.querySelector(activeElementID);

  normalClasses.forEach((item) => {
    activeElement.classList.add(item);
    element.classList.remove(item);
  });
  activeClasses.forEach((item) => {
    activeElement.classList.remove(item);
    element.classList.add(item);
  });

  activeTabElement.classList.add("hidden");
  activeTabElement.classList.remove("block");
  tabElement.classList.remove("hidden");
  tabElement.classList.add("block");
}

//  - activeClasses is for setting the classes for the active tab (anchor element)
//  - normalClasses is for setting the classes for all the tabs (anchor elements) expect the
// one that is currently active, if they are unset, then the default ones will be choosen
// activeClasses = "bg-blue-600 text-white"
// normalClasses = "text-blue-600 bg-transparent"
function initTabs(activeClasses,normalClasses){
  let dataTabs = document.querySelectorAll("[data-toggle='tab']");
  const toggleFunction = (event) => {
    event.preventDefault();
    activeClasses = activeClasses ? activeClasses:"bg-blue-600 text-white";
    normalClasses = normalClasses ? normalClasses:"text-blue-600 bg-white";
    changeAtiveTab(event,activeClasses,normalClasses)
  }
  const toggleAnimation = () => Array.from(dataTabs).forEach(el => zoomIn(document.querySelector(el.attributes.href.value)));
  for (var index = 0; index < dataTabs.length; index++) {
    dataTabs[index].addEventListener("click",toggleFunction);
    dataTabs[index].addEventListener("click",toggleAnimation);
  }
}

(function () {
  initTabs();
}());
