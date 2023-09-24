// JavaScript to handle showing/hiding imageWindow on button hover
const buttons = document.querySelectorAll('.coords_but');
const imageWindows = document.querySelectorAll('.imageWindow');

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

buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', (e) => {
        e.stopPropagation(); // Prevent hover event from affecting other elements

        // Set the image source and text based on the button hovered
        const imgSrc = images[index];
        const img = imageWindows[index].querySelector('img');
        img.src = imgSrc;

        const text = imageWindows[index].querySelector('p');
        text.textContent = texts[index];

        // Show the corresponding imageWindow
        imageWindows[index].style.display = 'block';
    });

    button.addEventListener('mouseleave', () => {
        // Hide all imageWindows when mouse leaves the button
        imageWindows.forEach((window) => {
            window.style.display = 'none';
        });
    });
});
