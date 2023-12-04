document.addEventListener('DOMContentLoaded', function () {
    const welcomeText = document.querySelector('.Welcome');
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
  
      if (isElementInViewport(welcomeText)) {
        welcomeText.classList.add('show');
      }
    });
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });