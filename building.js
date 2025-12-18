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
   COUNTER + ICON ANIMATION
   ========================= */

document.querySelectorAll(".counter-item").forEach(item => {

    const counter = item.querySelector(".counter");
    const icon = item.querySelector(".counter-icon");
    const target = +counter.dataset.target;

    ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        once: true,
        onEnter: () => {

            /* number animation */
            gsap.fromTo(counter,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 1.8,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        counter.innerText =
                            Math.floor(counter.innerText).toLocaleString();
                    }
                }
            );

            /* icon pulse */
            gsap.fromTo(icon,
                { scale: .6, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: .8,
                    ease: "back.out(2)"
                }
            );
        }
    });
});
