const toggleModal = e => {
  const modalID       = e.currentTarget.getAttribute("data-target");
  const modal         = document.querySelector(modalID);
  const modalDialog   = document.querySelector(`${modalID}-dialog`);
  const modalBackdrop = document.querySelector(`${modalID}-backdrop`);

  modalBackdrop.classList.toggle("hidden");
  modalBackdrop.classList.toggle("flex");

  if (modal.classList.contains("hidden")) {
    modal.style.display = "block";

    slideInBottom(modalDialog);

    setTimeout(() => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modal.classList.remove("opacity-0");
      modalDialog.classList.remove("-translate-y-1");
      modalDialog.classList.add("translate-y-1");
    }, 30);
  } else {
    modalDialog.classList.remove("translate-y-1");
    modalDialog.classList.add("-translate-y-1");
    
    slideOutBottom(modalDialog);

    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modal.classList.add("opacity-0");
    }, 300);
  }
}

const initModal = () => {
  const dataModal = document.querySelectorAll("[data-toggle='modal'");

  for (let i of dataModal) i.addEventListener("click", toggleModal);
}