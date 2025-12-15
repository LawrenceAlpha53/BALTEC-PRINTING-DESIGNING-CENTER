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


///portifolio js
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

const galleryCards = document.querySelectorAll('.gallery-card');

galleryCards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.getAttribute('data-title');
    modalDesc.textContent = card.getAttribute('data-desc');
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.style.display = 'none';
  }
});
//contact us
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formStatus.textContent = "Thank you! Your message has been sent.";
  formStatus.style.color = "#00c6ff";
  contactForm.reset();
});
