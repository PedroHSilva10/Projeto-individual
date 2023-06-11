//funçoes para passar o video para o proximo
const videoBoxes = document.querySelectorAll('.video-box');
    const prevArrow = document.querySelector('.video-arrow.prev');
    const nextArrow = document.querySelector('.video-arrow.next');
    let currentVideo = 0;

    function showVideo(index) {
      videoBoxes.forEach((box, idx) => {
        if (idx === index) {
          box.classList.add('active');
        } else {
          box.classList.remove('active');
        }
      });
    }

    function showNextVideo() {
      currentVideo = (currentVideo + 1) % videoBoxes.length;
      showVideo(currentVideo);
    }

    function showPrevVideo() {
      currentVideo = (currentVideo - 1 + videoBoxes.length) % videoBoxes.length;
      showVideo(currentVideo);
    }

    nextArrow.addEventListener('click', showNextVideo);
    prevArrow.addEventListener('click', showPrevVideo);