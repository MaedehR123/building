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
