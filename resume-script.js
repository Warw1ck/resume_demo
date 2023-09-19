const navButton = document.querySelector('.arrow')
const navBarContainer = document.querySelector('.container-sidebar')
const navBarBorder = document.querySelector('.border-right')

const personProfile = document.querySelector('.profile')
const footer = document.querySelector('.footer')

const image = document.querySelector('.image');
const rectangle = document.querySelector('.rectangle');

const layer = document.querySelector('body');
const imageBorder = document.querySelector('.image-border');

navButton.addEventListener('click', (e)=>{
    if (navBarContainer.style.transform != "translateX(-100%)") {
        navButton.style.transform = 'translateX(2rem)';
        navBarContainer.style.transform = 'translateX(-100%)';
        navButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>'
        personProfile.style.transform = 'none';
        footer.style.transform = 'none'


    }else{
        navBarContainer.style.transform = "none";
        navButton.style.transform = 'none'
        personProfile.style.transform = 'translateX(15%)'
        navButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>'
        footer.style.transform = 'translateX(24%)'

    }
    
})




layer.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth; // Calculate the mouse position on X-axis
    const y = e.clientY / window.innerHeight; // Calculate the mouse position on Y-axis

    // Apply the parallax effect to the image
    const translateX = -x * 40 + 10; // Adjust the values as needed for the desired effect
    const translateY = -y * 40 + 10; // Adjust the values as needed for the desired effect

    const translateXRectangle = -x * 30 + 10; // Adjust the values as needed for the desired effect
    const translateYRectangle = -y * 30 + 10; // Adjust the values as needed for the desired effect

    const translateXBorder= -x * 25 + 10; // Adjust the values as needed for the desired effect
    const translateYBorder = -y * 25 + 10; // Adjust the values as needed for the desired effect

    imageBorder.style.transform = `translate3d(${translateXBorder}px, ${translateYBorder}px, 0)`;
    image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    rectangle.style.transform = `translate3d(${translateXRectangle}px, ${translateYRectangle}px, 0)`;

});
