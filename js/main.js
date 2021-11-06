let textVak1 = document.getElementById("textVak");
let text = "Hallo ik ben Puk* niemand kan mij verstaan behalve jij dus vandaag kijk jij in mijn perspectief"
const button = document.getElementById("button1");
var i = 0;



typeWriter = () => {
    if (i< text.length){
        textVak1.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}






