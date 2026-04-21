const footer = document.querySelector("footer");

// Total scrollable height
const maxScroll = document.body.scrollHeight;

function updateColor() { 

    // Current scroll position
    const scrollY = window.scrollY;

    // Convert scroll position into a 0 - 360 hue
    const hue = (scrollY / maxScroll) * 360;

    // Apply color to background
    footer.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

window.addEventListener("scroll", updateColor);

