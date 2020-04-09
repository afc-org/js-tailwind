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

(function () {
  initAlert();
}());
