document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');
    const gameArea = document.getElementById('gameArea');
    const gameAreaRect = gameArea.getBoundingClientRect();

    target.addEventListener('click', function () {
        alert('You clicked the target!');
        moveTarget();
    });

    function moveTarget() {
        const maxX = gameAreaRect.width - target.offsetWidth;
        const maxY = gameAreaRect.height - target.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        target.style.left = randomX + 'px';
        target.style.top = randomY + 'px';
    }

    moveTarget();
});
