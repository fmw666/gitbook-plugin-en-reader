document.addEventListener("DOMContentLoaded", function() {
  const wordElements = document.querySelectorAll('.plug_sound');

  wordElements.forEach(element => {
      element.addEventListener('click', () => {
        const audioWds = element.getAttribute('wd');
        const accent = element.hasAttribute('accent') ? element.getAttribute('accent') : '1';
        const audioSrc = `https://dict.youdao.com/dictvoice?audio=${audioWds}&type=${accent}`;
        const audio = new Audio(audioSrc);
        audio.play();
      });
  });
});
