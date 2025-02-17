document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Welcome to My Personal Website!';

    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});