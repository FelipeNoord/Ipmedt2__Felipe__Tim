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

//Declared Variables
const maskImgElement = document.getElementById('js--mask--img');
let masksImgHelper = -1;
const startButton = document.getElementById('js--start--button');
const maskerInteractie = document.getElementById('js--maskInteraction');
// Random Masks

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


const displayNextImg = () => {
    masksImgHelper = (masksImgHelper === masksImgs.length - 1) ? 0 : masksImgHelper + 1;
    maskImgElement.src = masksImgs[masksImgHelper];
}

const startDisplayImgTimer = () => {
    setInterval(displayNextImg, 3000);
}

startDisplayImgTimer();

// Start Button

startButton.addEventListener('click', () => console.log('Ik klik!'));

// Scroll Text Appear
window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("js--info--text1").style.display = "block";
    }
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("js--info--text2").style.display = "block";
    }
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.getElementById("js--info--text3").style.display = "block";
    }

}

maskerInteractie.addEventListener("click", function() { addAnimation()})

function addAnimation() {
    maskerInteractie.style.transform = "scale(5)"
    console.log("hallo ik werk");
}
