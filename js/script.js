// Add custom JavaScript here
// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
      } else {
        navbar.classList.remove('bg-dark');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', userScroll);

  
  // ### scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});