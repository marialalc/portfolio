let currentBubble = 0;
const totalBubbles = 1;
const section = document.getElementById('pr1-naviguer');

// listen for scroll events
window.addEventListener('scroll', function() {
    const sectionTop = section.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop && currentBubble < totalBubbles) {
        currentBubble++;
        this.document.getElementById('bubble-naviguer-1').classList.add('visible');
    }
})