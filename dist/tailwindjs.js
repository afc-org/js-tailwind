(function () {
  initAlert();
  initTabs();
  initCollapse();
}());

/* Alert - Start */

function closeAlert(event){
  let alert = event.currentTarget.getAttribute("data-target");
  if(alert){
    alert = document.querySelectorAll(alert);
    for (var index = 0; index < alert.length; index++) {
      alert[index].parentNode.removeChild(alert[index]);
    }
  }
}

function initAlert(){
  let dataClose = document.querySelectorAll("[data-close='alert']");
  for (var index = 0; index < dataClose.length; index++) {
    dataClose[index].addEventListener("click",closeAlert);
  }
}

/* Alert - Stop */

/* Tabs - Start */

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
  for (var index = 0; index < dataTabs.length; index++) {
    dataTabs[index].addEventListener("click",toggleFunction);
  }
}

/* Tabs - Stop */

/* Collpase - Start */

function toggleCollapse(event){
  let collapseID = event.currentTarget.getAttribute("data-target")
  document.querySelector(collapseID).classList.toggle("hidden");
}

function initCollapse(){
  let dataCollapse = document.querySelectorAll("[data-toggle='collapse']");
  for (var index = 0; index < dataCollapse.length; index++) {
    dataCollapse[index].addEventListener("click",toggleCollapse);
  }
}

/* Collpase - Stop */
