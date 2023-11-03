const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDarkmode = body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkmode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});



