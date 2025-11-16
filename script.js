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