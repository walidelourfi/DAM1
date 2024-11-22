let startTime = new Date();
let duration = 0;

function getDuration() {
    return (new Date() - startTime) / 1000;
}

document.addEventListener('DOMContentLoaded', function() {
    const durationLink = document.getElementById('durationLink');

    setInterval(() => {
        duration = getDuration();
        durationLink.textContent = `${duration.toFixed(2)} segons`;
    }, 1000);
});