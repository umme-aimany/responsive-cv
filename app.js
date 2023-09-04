// Add animation effects to buttons
const skillsButton = document.getElementById('skillsButton');
const educationButton = document.getElementById('educationButton');

skillsButton.addEventListener('click', () => {
    const skillsList = document.getElementById('skillsList');
    skillsList.classList.toggle('animate__fadeIn');
});

educationButton.addEventListener('click', () => {
    const educationInfo = document.querySelectorAll('.mt-4 p');
    educationInfo.forEach((info) => {
        info.classList.toggle('animate__fadeIn');
    });
});