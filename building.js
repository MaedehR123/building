// MENU
document.querySelector('.menu-toggle')
?.addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('show'))

// SCROLL REVEAL
const obs=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting&&x.target.classList.add('show'))
},{threshold:.2})
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))

// MOUSE LIGHT EFFECT
document.querySelectorAll('.mouse-light').forEach(card=>{
card.addEventListener('mousemove',e=>{
const r=card.getBoundingClientRect()
card.style.setProperty('--x',`${e.clientX-r.left}px`)
card.style.setProperty('--y',`${e.clientY-r.top}px`)
})
})




const projectSwiper = new Swiper('.project-swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});




gsap.registerPlugin(ScrollTrigger);

/* =========================
   CINEMATIC ABOUT ANIMATION
   ========================= */

gsap.from(".about-content", {
    scrollTrigger:{
        trigger: ".about-section",
        start: "top 75%",
    },
    y: 120,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out"
});

gsap.from(".about-content h2", {
    scrollTrigger:{
        trigger: ".about-section",
        start: "top 70%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: .2
});

gsap.from(".about-content p", {
    scrollTrigger:{
        trigger: ".about-section",
        start: "top 65%",
    },
    y: 30,
    opacity: 0,
    stagger: .2,
    duration: .9
});

gsap.from(".about-features div", {
    scrollTrigger:{
        trigger: ".about-features",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: .15,
    duration: .8,
    ease: "power3.out"
});

/* =========================
   COUNTER ANIMATION
   ========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.dataset.target;

    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
            gsap.fromTo(counter,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 2,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        counter.innerText = Math.floor(counter.innerText).toLocaleString();
                    }
                }
            );
        }
    });
});

