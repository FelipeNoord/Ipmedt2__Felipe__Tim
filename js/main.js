// Random Masks
const maskImgElement = document.getElementById('js--mask--img');
const masksImgs = [
    '../img/pukmasker1.webp',
    '../img/pukmasker2.webp',
    '../img/pukmasker3.webp',
    '../img/pukmasker4.webp',
    '../img/pukmasker5.webp',
    '../img/pukmasker6.webp',
    '../img/pukmasker7.webp',
    '../img/pukmasker8.webp',
    '../img/pukmasker9.webp',
];
let masksImgHelper = -1;

const displayNextImg = () => {
    masksImgHelper = (masksImgHelper === masksImgs.length - 1) ? 0 : masksImgHelper + 1;
    maskImgElement.src = masksImgs[masksImgHelper];
}

const startDisplayImgTimer = () => {
    setInterval(displayNextImg, 3000);
}

startDisplayImgTimer();

// Start Button
const startButton = document.getElementById('js--start--button');
startButton.addEventListener('click', () => console.log('Ik klik!'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const setupImg = entry.target.querySelector('#js--setup--img');

        if(entry.isIntersecting) {
            setupImg.classList.add('popup');
            return;
        }
    });
});

observer.observe(document.getElementById('setup'));
