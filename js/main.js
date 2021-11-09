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
let transparentMasksImgHelper = 0;
const startButton = document.getElementById('js--start--button');
const maskInteraction = document.getElementById('js--maskInteraction');
const maskMenu = document.getElementById('js--mask-menu');
const maskIcon = document.getElementById('js--mask-icon');
const infoArea = document.getElementsByClassName("info");
const closeButton = document.getElementById('js--closeButton');

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

const transparentMaskImgs = [
    "../img/transparentmask1.png",
    "../img/transparentmask2.png",
    "../img/transparentmask3.png",
    "../img/transparentmask4.png",
    "../img/transparentmask5.png",
    "../img/transparentmask6.png",
    "../img/transparentmask7.png",
    "../img/transparentmask8.png",
    "../img/transparentmask9.png"
]


// const displayNextImg = () => {
//     masksImgHelper = (masksImgHelper === masksImgs.length - 1) ? 0 : masksImgHelper + 1;
//     maskImgElement.src = masksImgs[masksImgHelper];
// }

// const startDisplayImgTimer = () => {
//     setInterval(displayNextImg, 3000);
// }

// startDisplayImgTimer();

const showFunction = () => {
    
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

const addMaskAnimation = () => {
    maskInteraction.style.animation = "flip 1s forwards";
    setTimeout(function(){
        transparentMasksImgHelper = (transparentMasksImgHelper === transparentMaskImgs.length - 1) ? 0 : transparentMasksImgHelper + 1;
        maskInteraction.src = transparentMaskImgs[transparentMasksImgHelper];
    },500);

    setTimeout(function(){
        maskInteraction.style.animation = "none";
    },1000);
    
}

const addMenuAnimation = () => {
    maskMenu.style.animation = "becomeBigger 2s forwards";
    maskInteraction.style.display = "block";
    maskIcon.style.display = "none";
    console.log("ik werk");

}

const close = () => {

    maskMenu.style.animation = "none";
    console.log("close");
}



closeButton.addEventListener('click', () => close());


startButton.addEventListener('click', () => console.log('Ik klik!'));
window.addEventListener("scroll", () => {showFunction();
    console.log(document.body.scrollTop);});
maskInteraction.addEventListener("click", () => { addMaskAnimation()});
maskMenu.addEventListener("click", () => {addMenuAnimation()});