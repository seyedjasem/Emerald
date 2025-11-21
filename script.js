// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Close menu when clicking a link (Mobile)
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });
}

// Gallery Modal Logic
const gallery = document.getElementById('galleryGrid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

if (gallery) {
  gallery.addEventListener('click', (e) => {
    // Handle click on the overlay or the image
    const item = e.target.closest('.gallery-item');
    if (item) {
      const img = item.querySelector('img');
      const fullSrc = img.getAttribute('data-full') || img.src;
      modalImg.src = fullSrc;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    }
  });
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Navbar Active State on Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav.main-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });
});
