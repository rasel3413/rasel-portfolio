/**
* Ultra-Modern Portfolio JavaScript
* Enhanced interactions for the new design
* Updated: January 2026
*/

(function () {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    });
  }

  /**
   * Initialize AOS (Animate On Scroll)
   */
  window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  });

  /**
   * Initialize Typed.js
   */
  if (document.querySelector('.typed-text')) {
    const typed = new Typed('.typed-text', {
      strings: ['Software Engineer', 'Full-Stack Developer', 'Flutter Expert', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }

  /**
   * Initialize Vanilla Tilt
   */
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2
    });
  }


  /**
   * Generate Floating Icons in Hero Background
   */
  const floatingIconsContainer = document.getElementById('floating-icons-container');
  if (floatingIconsContainer) {
    const iconClasses = [
      'devicon-flutter-plain', 'devicon-react-original', 'devicon-laravel-plain',
      'devicon-python-plain', 'devicon-javascript-plain', 'devicon-html5-plain',
      'devicon-css3-plain', 'devicon-docker-plain', 'devicon-git-plain'
    ];

    // Create 15 random icons
    for (let i = 0; i < 15; i++) {
      const icon = document.createElement('i');
      const randomIcon = iconClasses[Math.floor(Math.random() * iconClasses.length)];

      icon.className = `floating-icon ${randomIcon}`;

      // Random Position
      icon.style.left = `${Math.floor(Math.random() * 100)}%`;

      // Random Animation Duration (between 15s and 30s)
      const duration = Math.floor(Math.random() * 15) + 15;
      icon.style.animationDuration = `${duration}s`;

      // Random Delay
      const delay = Math.floor(Math.random() * 10);
      icon.style.animationDelay = `-${delay}s`; // Negative delay to start immediately at random positions

      // Random Size
      const size = Math.floor(Math.random() * 2) + 1.5; // 1.5rem to 3.5rem
      icon.style.fontSize = `${size}rem`;

      floatingIconsContainer.appendChild(icon);
    }
  }

  /**
   * Initialize Particles.js
   */
  if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#4facfe"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4facfe",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  /**
   * Custom Cursor Logic
   */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');

  if (cursorDot && cursorOutline && !('ontouchstart' in window)) {
    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Add a slight delay for the outline for a smoother feel
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    });

    // Hover effect
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .service-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
      });
    });
  }

  /**
   * Mobile Menu Toggle
   */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');
  const mobileMenuIcon = mobileMenuToggle?.querySelector('i');

  if (mobileMenuToggle && navbarNav) {
    mobileMenuToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
      const isOpen = navbarNav.classList.contains('active');

      if (isOpen) {
        mobileMenuIcon.classList.remove('bi-list');
        mobileMenuIcon.classList.add('bi-x');
      } else {
        mobileMenuIcon.classList.remove('bi-x');
        mobileMenuIcon.classList.add('bi-list');
      }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
        mobileMenuIcon.classList.remove('bi-x');
        mobileMenuIcon.classList.add('bi-list');
      });
    });
  }

  /**
   * Navbar Scroll Effect
   */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /**
   * Active Navigation Link on Scroll
   */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function setActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink);


  /**
   * Portfolio Filtering
   */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        if (filterValue === '*' || card.classList.contains(filterValue.substring(1))) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /**
   * Skills Animation
   */
  const skillProgressBars = document.querySelectorAll('.skill-progress');

  const observerOptions = {
    threshold: 0.5
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.getAttribute('data-width');
        progressBar.style.width = width;
      }
    });
  }, observerOptions);

  skillProgressBars.forEach(bar => {
    skillObserver.observe(bar);
  });

  /**
   * Contact Form
   */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      // Simulation
      setTimeout(() => {
        btn.innerHTML = 'Message Sent!';
        btn.style.background = 'var(--gradient-secondary)';
        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

})();