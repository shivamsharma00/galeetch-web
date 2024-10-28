// script.js

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('solid');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('solid');
    }
  });
  
  // Changing Text Animation
  const words = ["Stay on Track", "Fulfill Goals", "Achieve Success"];
  let i = 0;
  let timer;
  
  function typingEffect() {
    const changingText = document.querySelector('.changing-text');
    let word = words[i].split("");
    let loopTyping = function() {
      if (word.length > 0) {
        changingText.innerHTML += word.shift();
        setTimeout(loopTyping, 100);
      } else {
        setTimeout(deletingEffect, 2000);
      }
    };
    loopTyping();
  }
  
  function deletingEffect() {
    const changingText = document.querySelector('.changing-text');
    let word = words[i].split("");
    let loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        changingText.innerHTML = word.join("");
        setTimeout(loopDeleting, 50);
      } else {
        i = (i + 1) % words.length;
        typingEffect();
      }
    };
    loopDeleting();
  }
  
  typingEffect();
  
  // Feature Slides Animation
  document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.feature-slide');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
  
    slides.forEach((slide, index) => {
      const elementTop = slide.offsetTop;
      const elementBottom = elementTop + slide.offsetHeight;
  
      if (scrollPosition + windowHeight / 2 >= elementTop && scrollPosition + windowHeight / 2 < elementBottom) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  });
  
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  