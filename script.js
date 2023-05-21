const openModals = document.querySelectorAll(".open-modals");
const modal = document.querySelector(".show-story");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//  opening modals
openModals.forEach((el) => {
  el.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

// closing modals with close button
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// closing modals with overlay
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// closing modals with keyboard-ESC key
document.addEventListener("keydown", function (ev) {
  if (ev.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
