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
    'images/image_06.png',
    'images/image_07.png',
    'images/image_08.png',
    'images/image_09.png',
    'images/image_10.png',
    'images/image_11.png',
    'images/image_12.png',
    'images/image_13.png',
    'images/image_14.png',
    'images/image_15.png',
    'images/image_16.png',
    'images/image_17.png',
    'images/image_18.png',
    'images/image_19.png',
    'images/image_20.png',
    'images/image_21.png',
    'images/image_22.png',
    'images/image_23.png',
    'images/image_24.png',
];

const texts = [
    'Brand Text 1',
    'Brand Text 2',
    'Brand Text 3',
    'Brand Text 4',
    'Brand Text 5',
    'Brand Text 6',
    'Brand Text 7',
    'Brand Text 8',
    'Brand Text 9',
    'Brand Text 10',
    'Brand Text 11',
    'Brand Text 12',
    'Brand Text 13',
    'Brand Text 14',
    'Brand Text 15',
    'Brand Text 16',
    'Brand Text 17',
    'Brand Text 18',
    'Brand Text 19',
    'Brand Text 20',
    'Brand Text 21',
    'Brand Text 22',
    'Brand Text 23',
    'Brand Text 24'
];

// Show the first 5 coordsButtons when the first picto is clicked
pictos[0].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index < 5 ? 'block' : 'none';
    });
});

// Show coordsButtons 5-8 when picto2 is clicked
pictos[1].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index >= 5 && index < 9 ? 'block' : 'none';
    });
});

// Show coordsButtons 10-11 when picto3 is clicked
pictos[2].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index >= 9 && index < 13 ? 'block' : 'none';
    });
});

// Show coordsButtons 12-16 when picto4 is clicked
pictos[3].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index >= 13 && index < 17 ? 'block' : 'none';
    });
});

// Show coordsButtons 17-21 when picto4 is clicked
pictos[4].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index >= 17 && index < 21 ? 'block' : 'none';
    });
});

// Show coordsButtons 21-25 when picto4 is clicked
pictos[5].addEventListener('click', () => {
    coordsButtons.forEach((button, index) => {
        button.style.display = index >= 21 && index < 25 ? 'block' : 'none';
    });
});

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
