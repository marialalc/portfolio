gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {


// ============================================
// FADE IN FROM BOTTOM ANIMATION
// ============================================
const fadeElements = gsap.utils.toArray('.fade-in-up');

gsap.set(fadeElements, { opacity: 0, y: 60 });

fadeElements.forEach(element => {
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      refreshPriority: -1
    }
  });
});

// ============================================
// FADE IN FROM LEFT ANIMATION
// ============================================
const fadeRightElements = gsap.utils.toArray('.fade-in-right');

gsap.set(fadeRightElements, { opacity: 0, x: -60 });

fadeRightElements.forEach(element => {
  gsap.to(element, {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      refreshPriority: -1
    }
  });
});

  // ============================================
  // EMOJI LIST GSAP ANIMATION
  // ============================================
  if (document.querySelector('.emoji-list')) {
    // Set initial state
    gsap.set('.emoji-list', {
      opacity: 0,
      scale: 0.8
    });

    // Animate when scrolled into view
    gsap.to('.emoji-list', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#emoji-list-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

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

    if (hypothesisTexts.length > 0) {
      gsap.set(hypothesisTexts[0], { opacity: 1 });
    }
  }

  // ============================================
  // QUESTIONNAIRE BUBBLE ANIMATIONS
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
  // OBJECTIVES BUBBLE ANIMATIONS
  // ============================================
  if (document.querySelector('#pr2-barriers')) {
    const bubbles = document.querySelectorAll('#pr2-barriers .bubble');

    bubbles.forEach((bubble, index) => {
      gsap.to(bubble, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.3,
        scrollTrigger: {
          trigger: '#pr2-barriers',
          start: 'top 50%',
          toggleActions: 'play none none reverse'
        }
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".slide-container",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          refreshPriority: 1
        }
      })
      .to(".users-content-1", { x: "-100%" }, 0)
      .to(".users-content-2", { x: "0%" }, 0);
    });
  }

  // ============================================
  // BAR CHART ANIMATION
  // ============================================
  if (document.querySelector('#pr2_data svg')) {
    gsap.set(['#bar-1', '#bar-2', '#bar-3', '#bar-4', '#bar-5', '#bar-6'], {
      scaleY: 0,
      transformOrigin: 'bottom'
    });

    gsap.set(['#percentage-100', '#percentage-21', '#completion-text', '#connector-line'], {
      opacity: 0
    });

    const chartTimeline = gsap.timeline({
      paused: true
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          chartTimeline.play();
          observer.unobserve(entry.target);
        }
      });
    });

    const chartSection = document.querySelector('#pr2_data');
    if (chartSection) {
      observer.observe(chartSection);
    }

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

  // ============================================
  // COMMENT BUBBLES ANIMATION
  // ============================================
  if (document.querySelector('#pr2_data_insights')) {
    const commentBubbles = document.querySelectorAll('.comment-bubble');
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.set('.comment-bubble', {
        scale: 0,
        opacity: 1
      });

      gsap.to(commentBubbles, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.2,
          from: "random"
        },
        scrollTrigger: {
          trigger: '#pr2_data_insights',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // Refresh ScrollTrigger after page loads
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

});