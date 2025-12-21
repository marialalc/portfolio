gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // HYPOTHESIS SECTION: GSAP ScrollTrigger version
  // ============================================
  if (document.querySelector('.hypothesis-right')) {
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
    if (hypothesisTexts.length > 0) {
      gsap.set(hypothesisTexts[0], { opacity: 1 });
    }
  }

  // ============================================
  // BUBBLE ANIMATIONS
  // ============================================
  if (document.querySelector('#pr1-naviguer') || document.querySelector('#pr1-repondre')) {
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
  }

  // ============================================
  // TEST ROWS ANIMATIONS
  // ============================================
  if (document.querySelector('#pr1-tests')) {
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
  }

  // ============================================
// USERS SECTION ANIMATION
// ============================================
if (document.querySelector('#pr2_users')) {

  // Only run on desktop
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Pin content 1
    ScrollTrigger.create({
      trigger: '.users-content-1',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false
    });

    // Pin content 2
    ScrollTrigger.create({
      trigger: '.users-content-2',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: true
    });
  });
}

// ============================================
// BAR CHART ANIMATION
// ============================================
if (document.querySelector('#pr2_data svg')) {

  // Set initial states
  gsap.set(['#bar-1', '#bar-2', '#bar-3', '#bar-4', '#bar-5', '#bar-6'], {
    scaleY: 0,
    transformOrigin: 'bottom'
  });

  gsap.set(['#percentage-100', '#percentage-21', '#completion-text', '#connector-line'], {
    opacity: 0
  });

  // Create timeline
  const chartTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#pr2_data',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animate bars one by one
  chartTimeline
    .to('#bar-1', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#percentage-100', { opacity: 1, duration: 0.3 })
    .to('#bar-2', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#bar-3', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#bar-4', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#bar-5', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#bar-6', { scaleY: 1, duration: 0.6, ease: 'power2.out' })
    .to('#percentage-21', { opacity: 1, duration: 0.3 })
    .to('#completion-text', { opacity: 1, duration: 0.3 })
    .to('#connector-line', { opacity: 1, duration: 0.3 });
}

// Animate floating comments - moves on its own, pauses during scroll
gsap.to(".comment-white", {
  x: "-20%",
  duration: 15,
  ease: "none",
  scrollTrigger: {
    trigger: "#pr2_data_insights",
    start: "top bottom", // starts when section enters viewport
    end: "bottom top",   // stops when section leaves viewport
    toggleActions: "play pause resume pause"
  }
});

gsap.to(".comment-grey", {
  x: "20%",
  duration: 15,
  ease: "none",
  scrollTrigger: {
    trigger: "#pr2_data_insights",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play pause resume pause"
  }
});


}); // Close DOMContentLoaded