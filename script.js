// script.js — Aashirwad CSC Center Landing Page
// WhatsApp number: +919685491896

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initLoader();
  initCursor();
  initNavbar();
  initModeToggle();
  initTypingEffect();
  initScrollTop();
  initWhatsAppFloat();
  initAiWidget();
  initTiltCards();
  initMagneticButtons();
  initParticleEffect();
});

// ===== LOADER =====
function initLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  // Hide loader after 1.5s
  setTimeout(() => {
    loader.classList.add('is-hidden');
    document.body.classList.remove('nav-open');
  }, 1500);
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  const cursorDot = document.querySelector('.cursor--dot');
  const cursorGlow = document.querySelector('.cursor--glow');
  if (!cursorDot || !cursorGlow) return;

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  let glowX = 0, glowY = 0;
  let isMoving = false;
  let moveTimeout;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;

    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => isMoving = false, 100);
  });

  function animateCursor() {
    // Dot follows instantly
    dotX += (mouseX - dotX) * 0.5;
    dotY += (mouseY - dotY) * 0.5;

    // Glow follows with delay
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide cursor when not moving
  const hideCursor = () => {
    if (!isMoving) {
      cursorDot.style.opacity = '0';
      cursorGlow.style.opacity = '0';
    } else {
      cursorDot.style.opacity = '1';
      cursorGlow.style.opacity = '1';
    }
  };
  setInterval(hideCursor, 200);
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class
    if (currentScrollY > 60) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Mobile menu toggle
  const menuBtn = document.querySelector('.nav__menu');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('is-open');
      document.body.classList.toggle('nav-open');
    });

    // Close menu on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        document.body.classList.remove('nav-open');
      });
    });
  }
}

// ===== DARK/LIGHT MODE TOGGLE =====
function initModeToggle() {
  const toggle = document.querySelector('.mode-toggle');
  if (!toggle) return;

  // Load saved preference
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'light') {
    document.body.classList.add('light');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('mode', isLight ? 'light' : 'dark');
  });
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
  const typingEl = document.querySelector('.typing-text');
  if (!typingEl) return;

  const phrases = [
    'Exam Forms',
    'Scholarship Forms',
    'Admission Forms',
    'Sarkari Naukri Forms',
    'PAN Card Services',
    'Aadhaar Services',
    'Banking/AEPS',
    'Website Design',
    'All Online Work'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 120;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 80;
    } else {
      typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing after loader
  setTimeout(type, 1800);
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top');
  if (!scrollBtn) return;

  function toggleScrollTop() {
    if (window.scrollY > 600) {
      scrollBtn.classList.add('is-visible');
    } else {
      scrollBtn.classList.remove('is-visible');
    }
  }

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleScrollTop);
  toggleScrollTop(); // Initial check
}

// ===== WHATSAPP FLOAT =====
function initWhatsAppFloat() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (!whatsappBtn) return;

  const phone = '+919685491896';
  const message = encodeURIComponent('नमस्ते! Aashirwad CSC Center से संपर्क करना चाहता हूं।');

  whatsappBtn.addEventListener('click', () => {
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
}

// ===== AI WIDGET (CHATBOT) =====
function initAiWidget() {
  const widget = document.querySelector('.ai-widget');
  const trigger = document.querySelector('.ai-widget__trigger');
  const panel = document.querySelector('.ai-widget__panel');
  const closeBtn = document.querySelector('.ai-widget__close');
  const body = document.querySelector('.ai-widget__body');
  const form = document.querySelector('.ai-widget__form');
  const input = document.querySelector('.ai-widget__form input');
  const quickReplies = document.querySelectorAll('.ai-widget__quick-replies button');

  if (!widget || !trigger || !panel) return;

  // Toggle widget
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    widget.classList.toggle('is-open');
  });

  // Close widget
  closeBtn?.addEventListener('click', () => {
    widget.classList.remove('is-open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!widget.contains(e.target)) {
      widget.classList.remove('is-open');
    }
  });

  // Quick replies
  quickReplies.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent;
      if (input) input.value = text;
      sendMessage(text);
    });
  });

  // Form submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input?.value.trim()) return;
    
    sendMessage(input.value);
    input.value = '';
  });

  function sendMessage(text) {
    if (!body) return;

    // Add user message
    addMessage(text, 'user');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(text);
      addMessage(response, 'bot');
      body.scrollTop = body.scrollHeight;
    }, 800);
  }

  function addMessage(text, type) {
    const msgEl = document.createElement('div');
    msgEl.className = `chat-message chat-message--${type}`;
    msgEl.textContent = text;
    body.appendChild(msgEl);
    body.scrollTop = body.scrollHeight;
  }

  function getBotResponse(input) {
    const lower = input.toLowerCase();
    
    if (lower.includes('exam') || lower.includes('form')) {
      return 'हम आपको सभी प्रकार के Exam Forms, Scholarship Forms, Admission Forms और Sarkari Naukri Forms में मदद कर सकते हैं। कृपया बताएं कि आप किस प्रकार का फॉर्म भरना चाहते हैं?';
    }
    if (lower.includes('pan') || lower.includes('aadhaar')) {
      return 'PAN Card और Aadhaar से संबंधित सभी सेवाएं उपलब्ध हैं। नया बनवाना है या कोई सुधार करवाना है?';
    }
    if (lower.includes('bank') || lower.includes('aeps')) {
      return 'Banking और AEPS सेवाएं उपलब्ध हैं। Cash withdrawal, Balance check, Money transfer जैसी सभी सुविधाएं मौजूद हैं।';
    }
    if (lower.includes('website') || lower.includes('design')) {
      return 'हम Website Design, PPT Presentation, Resume/CV Writing, E-Book & PDF Design और Document Formatting की सेवाएं प्रदान करते हैं। आप किस प्रकार की website चाहते हैं?';
    }
    if (lower.includes('price') || lower.includes('charge')) {
      return 'सेवा के प्रकार और जरूरतों के आधार पर charges अलग-अलग होते हैं। कृपया बताएं कि आप कौन सी सेवा लेना चाहते हैं, ताकि हम सही जानकारी दे सकें।';
    }
    if (lower.includes('time') || lower.includes('समय')) {
      return 'हमारा center सुबह 9:00 बजे से शाम 7:00 बजे तक खुला रहता है। आप कभी भी आ सकते हैं या WhatsApp पर संपर्क कर सकते हैं।';
    }
    
    return 'नमस्ते! Aashirwad CSC Center में आपका स्वागत है। हम Exam Forms, PAN Card, Aadhaar, Banking/AEPS, Website Design और अन्य सभी online services प्रदान करते हैं। आप किस सेवा के बारे में जानना चाहते हैं?';
  }
}

// ===== TILT EFFECT ON CARDS =====
function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (!tiltCards.length) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 25;
      const rotateX = (centerY - y) / 25;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic');
  if (!magneticBtns.length) return;

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
    });
  });
}

// ===== PARTICLE EFFECT =====
function initParticleEffect() {
  const canvas = document.querySelector('.particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(56, 189, 248, ${Math.random() * 0.4 + 0.1})`
      });
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      
      // Draw connections
      particles.forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - distance/120)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });
    
    animationId = requestAnimationFrame(animateParticles);
  }

  // Start animation
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animateParticles();

  // Cleanup on page hide
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animateParticles();
    }
  });
}

// ===== UTILITY FUNCTIONS =====

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Add loading="lazy" to images for better performance
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});

// Prevent form submission spam
document.querySelectorAll('form').forEach(form => {
  let isSubmitting = false;
  form.addEventListener('submit', (e) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }
    isSubmitting = true;
    setTimeout(() => isSubmitting = false, 2000);
  });
});
