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

(function () {
  initCollapse();
}());
