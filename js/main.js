const slider = document.querySelector('.password-generator__set-password-length');

const passwordLength = document.getElementById('password-length');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    const min = e.target.min || 0;
    const max = e.target.max || 100; // Ensure max is set in HTML
    const percentage = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, var(--eerie-black) ${percentage}%)`;
    passwordLength.textContent = value;
});
