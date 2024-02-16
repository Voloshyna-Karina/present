document.getElementById('present_box').addEventListener('click', function() {
    var animatedElement = document.getElementById('animatedElement');
    animatedElement.classList.toggle('rotate');
    
    var textElement = document.getElementById('textAnimated');
    
    setTimeout(function() {
        textElement.style.display = 'block';
    }, 1000);

    setTimeout(function() {
        var clickSound = document.getElementById('clickSound');
        clickSound.play();
    }, 1000);

    setTimeout(function() {
        confettiAnimation();
    }, 1000);
});

function createConfettiPiece() {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
    const confettiContainer = document.getElementById('confettiAnimated');

    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const positionX = (Math.random() - 0.5) * 2 * 200; 
    const positionY = (Math.random() - 0.5) * 2 * 200;

    confettiPiece.style.left = `${positionX}px`;
    confettiPiece.style.top = `${positionY}px`;

    confettiContainer.appendChild(confettiPiece);
}

function confettiAnimation() {
    let confettiCount = 0;

    function addConfetti() {
        if (confettiCount < 10) {
            createConfettiPiece();
            confettiCount++;
            setTimeout(addConfetti, 200); 
        }
    }

    addConfetti();
}