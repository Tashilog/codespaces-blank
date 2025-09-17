alert('MY LAMBING IS COMING!');

document.body.addEventListener('click', function(e) {
    // Create a new heart element
    const heart = document.createElement('div');
    heart.className = 'heart falling-heart';
    heart.style.position = 'fixed';
    heart.style.left = (e.clientX - 50) + 'px'; // center the heart
    heart.style.top = (e.clientY - 80) + 'px';  // center the heart
    heart.style.zIndex = 9999;
    heart.textContent = '';
    heart.style.setProperty('--falling', '1');
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});


document.getElementById('rain-btn').addEventListener('click', function() {
    startHeartRain(10, 10, 2000); // size(px), count, duration(ms)
});

