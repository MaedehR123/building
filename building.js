// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if(toggle){
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// Team details
function toggleDetails(card){
    card.classList.toggle("active");
}

// Scroll animations
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

document.querySelectorAll("section, .service-card, .project-item, .team-member")
.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Real Parallax Effect
window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY;
    const heroContent = document.querySelector(".hero-content");
    const heroBg = document.querySelector(".hero");
    if(heroContent){
        heroContent.style.transform=`translateY(${scrolled*0.25}px)`;
    }
    if(heroBg){
        heroBg.style.backgroundPositionY=`${scrolled*0.3}px`;
    }
});
