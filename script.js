const images = document.querySelectorAll('.hypothesis-right img');
const textBlocks = document.querySelectorAll('.hypothesis-text');

// Detect scroll on the whole window, not just the container
window.addEventListener('scroll', function() {
  const viewportCenter = window.scrollY + window.innerHeight / 2;

  images.forEach((img, index) => {
    const imgTop = img.offsetTop;
    const imgBottom = imgTop + img.clientHeight;

    // Check if image center is in viewport center
    if (viewportCenter >= imgTop && viewportCenter <= imgBottom) {
      // Remove active from all
      textBlocks.forEach(text => text.classList.remove('active'));

      // Add active to matching text
      textBlocks[index].classList.add('active');
    }
  });
});

// Set initial state
textBlocks[0].classList.add('active');

gsap.registerPlugin(ScrollTrigger);

// Animate bubbles in both sections
const sections = ['#pr1-naviguer', '#pr1-repondre'];

sections.forEach(sectionId => {
  const bubbles = document.querySelectorAll(`${sectionId} .bubble`);

  bubbles.forEach((bubble, index) => {
    gsap.to(bubble, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.3, // Stagger by 0.3s
      scrollTrigger: {
        trigger: sectionId,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  });
});