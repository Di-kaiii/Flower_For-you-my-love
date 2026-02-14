const messages = [
    "You're so gorgeous🌸",
    "You have the prettiest smile 😊💖",
    "You have the most beautiful eyes 👀",
    "Most dedicated Woman 💪",
    "You’re the most amazing person I’ve ever met💙"
];

function goToPage(pageNum) {
    const p1 = document.getElementById('page1');
    const p2 = document.getElementById('page2');

    if (pageNum === 2) {
        p1.classList.replace('active', 'hidden');
        p2.classList.replace('hidden', 'active');
    } else {
        p2.classList.replace('active', 'hidden');
        p1.classList.replace('hidden', 'active');
    }
}

function revealMessage(index) {
    const display = document.getElementById('message-text');
    const card = document.getElementById('message-display');
    
    // Animate the text change
    display.style.opacity = '0';
    
    setTimeout(() => {
        display.innerText = messages[index];
        display.style.opacity = '1';
        // Add a "bump" effect to the card
        card.style.transform = 'translateY(-5px)';
        setTimeout(() => card.style.transform = 'translateY(0)', 200);
    }, 200);
}