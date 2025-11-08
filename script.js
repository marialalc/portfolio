let currentBubble = 0;
const totalBubbles = 2;
const section = document.getElementById('pr1-naviguer');
let lastScrollTime = 0;
const scrollDelay = 800;

console.log('Script loaded!'); // Check if script runs
console.log('Section found:', section); // Check if section exists

window.addEventListener('wheel', function(e) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    const inSection = sectionTop < windowHeight && sectionBottom > 0;

    console.log('Scrolling! inSection:', inSection, 'currentBubble:', currentBubble); // Debug

    if (inSection && currentBubble < totalBubbles) {
        e.preventDefault();
        console.log('Locked!'); // Check if locking works

        const now = Date.now();

        if (now - lastScrollTime > scrollDelay) {
            currentBubble++;
            lastScrollTime = now;

            console.log('Showing bubble:', currentBubble); // Check which bubble

            if (currentBubble === 1) {
                document.getElementById('bubble-naviguer-1').classList.add('visible');
                console.log('Bubble 1 should be visible now');
            } else if (currentBubble === 2) {
                document.getElementById('bubble-naviguer-2').classList.add('visible');
                console.log('Bubble 2 should be visible now');
            }
        }
    }
}, { passive: false });