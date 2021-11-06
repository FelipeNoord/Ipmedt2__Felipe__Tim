const maskImgElement = document.getElementById('js--mask--img');
const masksImgs = [
    '../img/pukmasker1.jpg',
    '../img/pukmasker2.jpg',
    '../img/pukmasker3.jpg',
    '../img/pukmasker4.jpg',
    '../img/pukmasker5.jpg',
    '../img/pukmasker6.jpg',
    '../img/pukmasker7.jpg',
    '../img/pukmasker8.jpg',
    '../img/pukmasker9.jpg',
];
let x = -1;

const displayNextImg = () => {
    x = (x === masksImgs.length - 1) ? 0 : x + 1;
    maskImgElement.src = masksImgs[x];
}

const startDisplayImgTimer = () => {
    setInterval(displayNextImg, 3000);
}

startDisplayImgTimer();
