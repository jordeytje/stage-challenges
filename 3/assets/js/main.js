const wizElem = document.getElementById('wizard');
wizElem.addEventListener('click', showWizard);

function showWizard() {
    const img = document.getElementById('wizard-img');
    const target = document.querySelector('section.about #wizard-overlay');

    if (img) {
        target.classList.add('magic');
        img.classList.add('show');

        setTimeout(() => {
            target.classList.remove('magic');
            img.classList.remove('show');
        }, 2500);
    }
}