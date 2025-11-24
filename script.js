// ============================================
// HYPOTHESIS SECTION: Text changes as you scroll
// ============================================
const images = document.querySelectorAll('.hypothesis-right img');
const textBlocks = document.querySelectorAll('.hypothesis-text');


function throttle(func, wait) {
  let timeout;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        func();
        timeout = null;
      }, wait);
    }
  };
}

function updateActiveText() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  images.forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    const imgTop = rect.top + window.scrollY;
    const imgBottom = imgTop + img.offsetHeight;

    if (scrollPosition >= imgTop && scrollPosition <= imgBottom) {
      textBlocks.forEach(text => text.classList.remove('active'));
      textBlocks[index].classList.add('active');
    }
  });
}

window.addEventListener('scroll', throttle(updateActiveText, 100));


textBlocks[0].classList.add('active');

// ============================================
// BUBBLE ANIMATIONS
// ============================================
gsap.registerPlugin(ScrollTrigger);

const sections = ['#pr1-naviguer', '#pr1-repondre'];

sections.forEach(sectionId => {
  const bubbles = document.querySelectorAll(`${sectionId} .bubble`);

  bubbles.forEach((bubble, index) => {
    gsap.to(bubble, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.3,
      scrollTrigger: {
        trigger: sectionId,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  });
});