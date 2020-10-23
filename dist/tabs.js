const changeAtiveTab = (e, activeClasses, normalClasses) => {
  e.preventDefault();

  normalClasses = normalClasses.split(" ").filter(item => item !== " " && item !== "");
  activeClasses = activeClasses.split(" ").filter(item => item !== " " && item !== "");

  let queryActiveClasses  = activeClasses.map(item => "." + item);
  let element             = e.currentTarget;
  let elementID           = e.currentTarget.getAttribute("href");
  let tabElement          = document.querySelector(elementID);
  let ulElement           = element.parentNode.parentNode;
  let activeElement       = ulElement.querySelector("li > a" + queryActiveClasses);
  let activeElementID     = activeElement.getAttribute("href");
  let activeTabElement    = document.querySelector(activeElementID);

  normalClasses.forEach(item => {
    activeElement.classList.add(item);
    element.classList.remove(item);
  });

  activeClasses.forEach(item => {
    activeElement.classList.remove(item);
    element.classList.add(item);
  });

  activeTabElement.classList.add("hidden");
  activeTabElement.classList.remove("block");
  tabElement.classList.remove("hidden");
  tabElement.classList.add("block");
}

const initTabs = (activeClasses, normalClasses) => {
  const dataTabs = document.querySelectorAll("[data-toggle='tab']");

  const toggleFunction = e => {
    e.preventDefault();

    activeClasses = activeClasses ? activeClasses:"bg-blue-600 text-white";
    normalClasses = normalClasses ? normalClasses:"text-blue-600 bg-white";

    changeAtiveTab(e, activeClasses, normalClasses);
  }

  const toggleAnimation = () => {
    Array.from(dataTabs).forEach(el => fadeIn(document.querySelector(el.attributes.href.value), 300));
  }

  for (let i of dataTabs) {
    i.addEventListener("click", toggleFunction);
    i.addEventListener("click", toggleAnimation);
  }
}