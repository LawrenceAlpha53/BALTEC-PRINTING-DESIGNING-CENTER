// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("active");});

// SCROLL ANIMATION
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');}
  });
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

// TESTIMONIAL SLIDER
const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let scrollAmount = 0;
const slideWidth = 320;
nextBtn.addEventListener('click',()=>{scrollAmount+=slideWidth;slider.scrollTo({left:scrollAmount,behavior:'smooth'});});
prevBtn.addEventListener('click',()=>{scrollAmount-=slideWidth;if(scrollAmount<0)scrollAmount=0;slider.scrollTo({left:scrollAmount,behavior:'smooth'});});
