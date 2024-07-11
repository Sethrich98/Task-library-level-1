document.addEventListener('DOMContentLoaded', () => {
  
    const header = document.getElementById('header');
    const headerContent = document.createElement('div');
    headerContent.innerHTML = `
        <h1>JavaScript made this!!</h1>
        <h2><span style="color: blue;">Seth</span> wrote the JavaScript</h2>
    `;
    headerContent.style.textAlign = 'center'
    header.appendChild(headerContent);

   
    const messages = document.querySelectorAll('.message');
    const funMessages = [
        "Let's go for an adventure!",
        "Yes, let's explore the mountains!",
        "Don't forget the snacks and water.",
        "I've packed everything. Let's go!"
    ];

    messages.forEach((message, index) => {
        message.textContent = funMessages[index % funMessages.length];
    });

  
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
        messages.forEach(message => {
            message.textContent = '';
        });
    });


    const themeDropDown = document.getElementById('theme-drop-down');
    themeDropDown.addEventListener('change', (event) => {
        const theme = event.target.value;
        if (theme === 'theme-one') {
            messages.forEach(message => {
                if (message.classList.contains('left')) {
                    message.style.backgroundColor = 'blue';
                } else {
                    message.style.backgroundColor = 'brown';
                }
            });
        } else if (theme === 'theme-two') {
            messages.forEach(message => {
                if (message.classList.contains('left')) {
                    message.style.backgroundColor = 'red';
                } else {
                    message.style.backgroundColor = 'black';
                }
            });
        }
    });
});