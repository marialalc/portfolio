gsap.registerPlugin(ScrollTrigger);

gsap.to("#bubble-naviguer-1", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#pr1-naviguer",
    start: "top center",
    toggleActions: "play none none reverse"
  }
});

gsap.to("#bubble-naviguer-2", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#pr1-naviguer",
    start: "top 30%",
    toggleActions: "play none none reverse"
  }
});