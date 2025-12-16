gsap.registerPlugin(ScrollTrigger);
// ============================================
// HYPOTHESIS SECTION: GSAP ScrollTrigger version
// ============================================
const hypothesisImages = document.querySelectorAll('.hypothesis-right img');
const hypothesisTexts = document.querySelectorAll('.hypothesis-text');

hypothesisImages.forEach((img, index) => {
  ScrollTrigger.create({
    trigger: img,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.to(hypothesisTexts, { opacity: 0, duration: 0.3 });
      gsap.to(hypothesisTexts[index], { opacity: 1, duration: 0.3 });
    },
    onEnterBack: () => {
      gsap.to(hypothesisTexts, { opacity: 0, duration: 0.3 });
      gsap.to(hypothesisTexts[index], { opacity: 1, duration: 0.3 });
    }
  });
});

// Show first text by default
gsap.set(hypothesisTexts[0], { opacity: 1 });

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

// ============================================
// TEST ROWS ANIMATIONS
// ============================================
const testRows = document.querySelectorAll('.tests-row');

testRows.forEach((row, index) => {
  gsap.from(row, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: '#pr1-tests',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });
});



// ============================================
// USERS SECTION ANIMATION
// ============================================
// ============================================
// USERS SECTION ANIMATION
// ============================================
if (document.querySelector('#pr2_users')) {
  // Pin the section
  ScrollTrigger.create({
    trigger: "#pr2_users",
    start: "top top",
    end: "+=300vh",
    pin: true,
    pinSpacing: true
  });

  // Handle content switching on scroll
  window.addEventListener("scroll", function () {
    let section = document.querySelector('#pr2_users');
    if (!section) return; // Safety check

    let scrollPosition = window.scrollY;
    let sectionTop = section.offsetTop;
    let windowHeight = window.innerHeight;

    let content1 = document.querySelector('.users-content-1');
    let content2 = document.querySelector('.users-content-2');

    if (!content1 || !content2) return; // Safety check

    let relativeScroll = scrollPosition - sectionTop;

    // Switch content at the halfway point
    if (relativeScroll < windowHeight * 1.5) {
      content1.style.opacity = '1';
      content1.style.transform = 'translateY(0)';
      content2.style.opacity = '0';
      content2.style.transform = 'translateY(50px)';
    } else {
      content1.style.opacity = '0';
      content1.style.transform = 'translateY(-50px)';
      content2.style.opacity = '1';
      content2.style.transform = 'translateY(0)';
    }
  });
}