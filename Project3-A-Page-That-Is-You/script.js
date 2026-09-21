// Initialize Lucide Icons & Page Interactions
document.addEventListener('DOMContentLoaded', () => {
  // Render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Theme Toggle Logic ---
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme-preference');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme (default to dark if preference is dark or stored)
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'dark');
  document.documentElement.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme-preference', nextTheme);
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// --- Contact Form Submission Simulation ---
function handleFormSubmit() {
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const messageInput = document.getElementById('userMessage');

  if (!submitBtn || !feedback) return;

  const originalContent = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span>';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;
    if (window.lucide) window.lucide.createIcons();

    const senderName = nameInput ? nameInput.value.trim() : '';
    const thankYouMsg = senderName ? `Thank you, ${senderName}!` : 'Thank you!';
    feedback.className = 'form-feedback success';
    feedback.textContent = `${thankYouMsg} Your message has been prepared. You can also connect via GitHub or email.`;

    // Clear fields safely if present
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (messageInput) messageInput.value = '';

    setTimeout(() => {
      feedback.textContent = '';
    }, 6000);
  }, 900);
}
