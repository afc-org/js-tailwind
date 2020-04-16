function toggleModal(event){
  let modalID = event.currentTarget.getAttribute("data-target");
  let modal = document.querySelector(modalID);
  let modalDialog = document.querySelector(modalID+"-dialog");
  let modalBackdrop = document.querySelector(modalID+"-backdrop");
  modalBackdrop.classList.toggle("hidden");
  modalBackdrop.classList.toggle("flex");
  if (modal.classList.contains("hidden")) {
    modal.style.display = "block";
    setTimeout(()=>{
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modal.classList.remove("opacity-0");
      modalDialog.classList.remove("-translate-y-1");
      modalDialog.classList.add("translate-y-1");
    },30);
  } else {
    modalDialog.classList.remove("translate-y-1");
    modalDialog.classList.add("-translate-y-1");
    setTimeout(()=>{
      modal.style.display = "none";
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modal.classList.add("opacity-0");
    },30)
  }
}

function initModal(){
  let dataModal = document.querySelectorAll("[data-toggle='modal']");
  for (var index = 0; index < dataModal.length; index++) {
    dataModal[index].addEventListener("click",toggleModal);
  }
}

(function () {
  initModal();
}());
