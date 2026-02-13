const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");
const sliderTracks = document.querySelectorAll(".slider-track");

/* OPEN IMAGE */
document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", function () {

    pauseSlider();

    modalContent.innerHTML = `<img src="${this.src}">`;
    modal.style.display = "flex";
  });
});

/* OPEN VIDEO */
document.querySelectorAll(".gallery-video").forEach(video => {
  video.addEventListener("click", function () {

    pauseSlider();

    const videoSrc = this.querySelector("source").src;

    modalContent.innerHTML = `
      <video controls autoplay>
        <source src="${videoSrc}" type="video/mp4">
      </video>
    `;

    modal.style.display = "flex";
  });
});

/* CLOSE MODAL */
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function(e){
  if(e.target === modal){
    closeModal();
  }
});

function closeModal(){
  modal.style.display = "none";
  modalContent.innerHTML = "";
  resumeSlider();
}

/* PAUSE SLIDER */
function pauseSlider(){
  sliderTracks.forEach(track => {
    track.style.animationPlayState = "paused";
  });
}

/* RESUME SLIDER */
function resumeSlider(){
  sliderTracks.forEach(track => {
    track.style.animationPlayState = "running";
  });
}
