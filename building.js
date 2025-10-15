// انتخاب منو و دکمه همبرگر
const nav = document.querySelector('nav');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// وقتی دکمه همبرگر کلیک شد، منو باز یا بسته می‌شود
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// برای قسمت اعضای تیم ما
function toggleDetails(member) {
    const isActive = member.classList.contains('active');
    document.querySelectorAll('.team-member').forEach(m => m.classList.remove('active'));
    if (!isActive) member.classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex - 1].style.display = 'block';  
}