'use strict'

//IMAGES MODAL
const modalBtnEl = document.querySelector(".modal-button-box");
const modalEl = document.querySelector(".modal");
const machineGridImg = document.querySelectorAll(".machine-grid");
const overlay = document.querySelector(".overlay");
const images = document.querySelectorAll(".modal-img");

const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const closeButton = document.getElementById("close-modal-btn");

//OPEN MODAL
for (let i = 0; i <= 11; i++) {
  machineGridImg[i].addEventListener("click", function () {
    images[i].classList.toggle("visible");
    modalEl.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("mobile device");
      modalEl.requestFullscreen();
    }
  });
}

//   CLOSE MODAL FUNCTION
const closeModal = function () {
  if (!modalEl.classList.contains("hidden")) {
    modalEl.classList.add("hidden");
    overlay.classList.add("hidden");
    for (let i = 0; i <= 11; i++) {
      if (images[i].classList.contains("visible")) {
        images[i].classList.remove("visible");
      }
    }
  }
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  // document.exitFullscreen();
};

//LISTENER FOR FULLSCREEN EXITING
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    closeModal();
  }
});

//CLICK OUT TO CLOSE MODAL
overlay.addEventListener("click", closeModal);

// ESCAPE BUTTON TO CLOSE MODAL
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeModal();
  }
});
//CLICK THE X TO CLOSE MODAL
closeButton.addEventListener("click", closeModal);

//RIGHT AND LEFT FUNCTIONALITY
const goRight = function () {
  for (let i = 0; i < images.length; ++i) {
    //SWITCH TO THE FIRST IMAGE AFTER LAST IMAGE
    if (images[images.length - 1].classList.contains("visible")) {
      images[images.length - 1].classList.toggle("visible");
      images[0].classList.toggle("visible");
      //SWITCH TO NEXT IMAGE OVER
    } else if (images[i].classList.contains("visible")) {
      images[i].classList.toggle("visible");
      images[(i += 1)].classList.toggle("visible");
      break;
    }
  }
};

const goLeft = function () {
  for (let i = 0; i < images.length; ++i) {
    //SWITCH FROM FIRST IMAGE TO LAST IMAGE
    if (images[0].classList.contains("visible")) {
      images[images.length - 1].classList.toggle("visible");
      images[0].classList.toggle("visible");
    } else if (images[i].classList.contains("visible")) {
      images[i].classList.toggle("visible");
      images[(i -= 1)].classList.toggle("visible");
      break;
    }
  }
};
//RIGHT ARROW FUNCTIONALITY
rightArrow.addEventListener("click", goRight);
//LEFT KEY FUNCTIONALITY
leftArrow.addEventListener("click", goLeft);

//RIGHT AND LEFT KEYS FUNCTIONALITY
document.addEventListener("keydown", function (k) {
  if (k.key === "ArrowRight" && !modalEl.classList.contains("hidden")) {
    goRight();
  } else if (k.key === "ArrowLeft" && !modalEl.classList.contains("hidden")) {
    goLeft();
  }
});
