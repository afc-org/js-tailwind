const closeAlert = e => {
  let alert = e.currentTarget.getAttribute("data-target");

  if (alert) {
    alert = document.querySelectorAll(alert);

    for (let i of alert) {
      fadeOut(i);
      
      setTimeout(() => i.remove(), 450);
    }
  }
}

const initAlert = () => {
  const dataClose = document.querySelectorAll("[data-close='alert'");

  for (let i of dataClose) i.addEventListener("click", closeAlert);
}