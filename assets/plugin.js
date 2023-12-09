document.addEventListener("DOMContentLoaded", function() {
  let currentAudio = null;

  const wordElements = document.querySelectorAll('.plug_sound');

  wordElements.forEach(element => {
      element.addEventListener('click', () => {
        // pause the currentAudio
        if (currentAudio) {
          currentAudio.pause();
        }

        const audioWds = element.getAttribute('wd');
        const accent = element.hasAttribute('accent') ? element.getAttribute('accent') : '1';
        const audioSrc = `https://dict.youdao.com/dictvoice?audio=${audioWds}&type=${accent}`;
        const audio = new Audio(audioSrc);

        // set currentAudio
        currentAudio = audio;

        audio.play();
      });
  });
});
