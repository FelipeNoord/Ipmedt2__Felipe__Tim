// let textVak1 = document.getElementById("textVak");
// let text = "Hallo ik ben Puk* niemand kan mij verstaan behalve jij dus vandaag kijk jij in mijn perspectief"
// const button = document.getElementById("button1");
// var i = 0;



// typeWriter = () => {
//     if (i< text.length){
//         textVak1.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 50);
//     }
// }


// Random Masks
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
