document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        const fig = image.nextElementSibling;
        const hiddenText = fig.nextElementSibling;
        image.addEventListener('mouseover', function() {
            document.body.style.backgroundColor = 'lightblue';
            if (hiddenText && hiddenText.tagName.toLowerCase() === 'figcaption') {
                hiddenText.style.display = 'block';
            }
        });

        image.addEventListener('mouseout', function() {
            document.body.style.backgroundColor = '';
            if (hiddenText && hiddenText.classList.contains('hiddenText')) {
                hiddenText.style.display = 'none';
            }
        });

        image.addEventListener('click', function() {
            const figcaption = image.nextElementSibling;
            const fighiddenText = figcaption.nextElementSibling;
            if (figcaption && figcaption.tagName.toLowerCase() === 'figcaption') {
                if (figcaption.style.display === 'block') {
                    figcaption.style.fontSize = '';
                    fighiddenText.style.fontSize = '';
                } else {
                    figcaption.style.display = 'block';
                    figcaption.style.fontSize = '2em';
                    fighiddenText.style.display = 'block';
                    fighiddenText.style.fontSize = '1.5em';
                }
            }
        });
    });
});