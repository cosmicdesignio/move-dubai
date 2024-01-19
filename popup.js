document.addEventListener("DOMContentLoaded", function () {
  const floatingButton = document.querySelector(".floating-button");
  const popupModal = document.querySelector(".nav_popup-modal");
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupContainer = document.querySelector(".popup-container");
  const closeButton = document.querySelector(".close_popup-button");

  floatingButton.addEventListener("click", openPopup);
  closeButton.addEventListener("click", closePopup);
  popupOverlay.addEventListener("click", closePopup);

  gsap.set(popupOverlay, { opacity: 0 });
  gsap.set(popupContainer, { y: "3rem", opacity: 0 });

  function openPopup() {
    const open = gsap.timeline({
      defaults: {
        duration: 0.125,
      },
    });
    open.to(floatingButton, { opacity: 0 });
    open.to(floatingButton, { display: "none" });
    open.to(popupModal, {
      display: "flex",
    });
    open.to(popupOverlay, { opacity: 0.5 });
    open.to(popupContainer, { y: 0, opacity: 1 });
  }

  function closePopup() {
    const close = gsap.timeline({
      defaults: {
        duration: 0.125,
      },
    });
    close.to(popupContainer, {
      y: "3rem",
      opacity: 0,
    });
    close.to(popupOverlay, { opacity: 0 });
    close.to(floatingButton, { display: "flex" });
    close.to(floatingButton, { opacity: 1 }, "<");
    close.to(popupModal, { display: "none" });
  }
});
