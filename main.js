const pictos = document.querySelectorAll('.picto');
const imageWindows = document.querySelectorAll('.imageWindow');
const coordsButtons = document.querySelectorAll('.coords_but');
const popupsLarge = document.querySelectorAll('.popup-large');
const body = document.body;

const images = [
    'images/image_01.png',
    'images/image_02.png',
    'images/image_03.png',
    'images/image_04.png',
    'images/image_05.png',
];

const texts = [
    'Brand and Precinct Identification',
    'Wayfinding and User Journey',
    'Landscape Elements',
    'Facades and Built Forms',
    'User Amenity, Lifestyle and Wellbeing',
];

pictos.forEach((picto, index) => {
    picto.addEventListener('mouseenter', () => {
        // Show the corresponding popup-large with fade-in effect
        popupsLarge[index].style.opacity = '1';
    });

    picto.addEventListener('mouseleave', () => {
        // Hide the corresponding popup-large with fade-out effect
        popupsLarge[index].style.opacity = '0';
    });
});

coordsButtons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        // Set the image source and text based on the button hovered
        const imgSrc = images[index];
        const img = imageWindows[index].querySelector('img');
        img.src = imgSrc;

        const text = imageWindows[index].querySelector('p');
        text.textContent = texts[index];

        // Show the corresponding imageWindow with fade-in effect
        imageWindows[index].style.opacity = '1';
    });

    button.addEventListener('mouseleave', () => {
        // Hide the corresponding imageWindow with fade-out effect
        imageWindows[index].style.opacity = '0';
    });
});

function adjustBackgroundSize() {
    const screenWidth = window.innerWidth;
    const maxWidth = 768;
    const backgroundSize = screenWidth > maxWidth ? 'cover' : '1280px';
    body.style.backgroundSize = backgroundSize;
}

adjustBackgroundSize();
window.addEventListener('resize', adjustBackgroundSize);
