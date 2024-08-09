// JavaScript
document.getElementById('welcome').innerText += 
" Editors";
window.addEventListener('resize', adjustImage);

function adjustImage() {
    const img = document.getElementById('responsive-image');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Adjust image styles based on screen size
    if (screenWidth >= 320 && screenWidth < 480) {
        // Small devices (phones, portrait)
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
    } else if (screenWidth >= 480 && screenWidth < 768) {
        // Medium devices (tablets, landscape)
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        // Large devices (laptops/desktops)
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
    } else if (screenWidth >= 1024) {
        // Extra large devices (large laptops and desktops)
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
    }
}

// Initial call to adjust image on load
adjustImage();