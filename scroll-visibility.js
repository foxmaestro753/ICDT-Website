document.addEventListener('DOMContentLoaded', function () {
    const welcome = document.querySelector('.Welcome');
    const welcomeTitle = document.querySelector('.welcome-title');
    const welcomeSub = document.querySelector('.welcome-sub');
    const welcomeText = document.querySelector('.welcome-text');
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      // Adjust this threshold based on when you want the elements to appear/disappear
      const threshold = 100;
  
      if (scrollPosition > threshold) {
        welcome.classList.add('show');
        welcomeTitle.classList.add('show');
        welcomeSub.classList.add('show');
        welcomeText.classList.add('show');
      } else {
        welcome.classList.remove('show');
        welcomeTitle.classList.remove('show');
        welcomeSub.classList.remove('show');
        welcomeText.classList.remove('show');
      }
    });
  });
  