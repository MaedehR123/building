// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Team Details Toggle
function toggleDetails(card) {
    card.classList.toggle("active");
}

// Scroll Animation
const sections = document.querySelectorAll("section, .team-section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});

// Initial state
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "1s";
});
