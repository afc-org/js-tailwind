const toggleCollapse = e => {
  const collapseID  = e.currentTarget.getAttribute("data-target");

  document.querySelector(collapseID).classList.toggle("hidden");
}

const initCollapse = () => {
  const dataCollapse = document.querySelectorAll("[data-toggle='collapse']");
  
  for (let i of dataCollapse) i.addEventListener("click",toggleCollapse);
}