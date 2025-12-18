document.addEventListener("DOMContentLoaded", () => {

  // MENU TOGGLE
  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  // SCROLL REVEAL ساده
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // MOUSE LIGHT EFFECT
  document.querySelectorAll('.mouse-light').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - r.left}px`);
      card.style.setProperty('--y', `${e.clientY - r.top}px`);
    });
  });

  // SWIPER
  const projectSwiper = new Swiper('.project-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

})


