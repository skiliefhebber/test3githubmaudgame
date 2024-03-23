const blauweJurk = document.querySelector('.blauwejurk');
const geleJurk = document.querySelector('.gelejurk');
const rokje = document.querySelector('.spijkerrokje');
const pantalon = document.querySelector('.pantalon');
const bloesje = document.querySelector('.bloesje');
const shirt = document.querySelector('.shirt');
const converse = document.querySelector('.converse');
const schoenen = document.querySelector('.schoenen');

const tweeJurk = document.querySelector(".tweejurk");
const tweeGeelJurk = document.querySelector(".tweegeeljurk");
const tweeRokje = document.querySelector(".tweerokje");
const tweePantalon = document.querySelector(".tweepantalon");
const tweeBloesje = document.querySelector(".tweebloesje");
const tweeShirt = document.querySelector(".tweeshirt");
const tweeConverse = document.querySelector(".tweeconverse");
const tweeSchoenen = document.querySelector(".tweeschoenen");

let buttonKlaar = document.querySelector('.buttonklaar');
let buttonCijfer = document.querySelector('.buttoncijfer');

let knopStatus = false

let gekozenJurk = ""
let gekozenOnderkleding = ""
let gekozenBovenkleding = ""
let gekozenSchoenen = ""

let juryNummer = Math.random() *10
juryNummer = Math.ceil(juryNummer) 




function toonBlauweJurk(){
    tweeJurk.classList.toggle('hidden');
    if(gekozenJurk !== ""){
        gekozenJurk = ""
    } else {
        gekozenJurk = "tweejurk"
    }
}
//  het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonGeleJurk(){
    tweeGeelJurk.classList.toggle('hidden');
    if(gekozenJurk !== ""){
        gekozenJurk = ""
    } else {
        gekozenJurk = "tweegeeljurk"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonRokje(){
    tweeRokje.classList.toggle('hidden');
    if(gekozenOnderkleding !== ""){
        gekozenOnderkleding = ""
    } else {
        gekozenOnderkleding = "tweerokje"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonPantalon(){
    tweePantalon.classList.toggle('hidden');
    if(gekozenOnderkleding !== ""){
        gekozenOnderkleding = ""
    } else {
        gekozenOnderkleding = "tweepantalon"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.
function toonBloesje(){
    tweeBloesje.classList.toggle('hidden');
    if(gekozenBovenkleding !== ""){
        gekozenBovenkleding = ""
    } else {
        gekozenBovenkleding = "tweebloesje"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.
function toonShirt(){
    tweeShirt.classList.toggle('hidden');
    if(gekozenBovenkleding !== ""){
        gekozenBovenkleding = ""
    } else {
        gekozenBovenkleding = "tweeshirt"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.
function toonConverse(){
    tweeConverse.classList.toggle('hidden');
    if(gekozenSchoenen !== ""){
        gekozenSchoenen = ""
    } else {
        gekozenSchoenen = "tweeconverse"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.
function toonSchoenen(){
    tweeSchoenen.classList.toggle('hidden');
    if(gekozenSchoenen !== ""){
        gekozenSchoenen = ""
    } else {
        gekozenSchoenen = "tweewitteschoenen"
    }
}
// het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function paginaVeranderen(){
    if(knopStatus == false){
        knopStatus = false
        document.querySelector('.pagina1').style.display = "none";
        document.querySelector('.pagina2').style.display = "block";
        document.getElementById("song").play(); // https//youtu.be/ZFqtk0Tsnsc?si=2Ex6hnoS0hCrAqWw
    } else{
        knopStatus = true
        document.querySelector('.pagina1').style.display = "none";
        document.querySelector('.pagina2').style.display = "block";
    }
    function toonGekozenJurken(){
        if(gekozenJurk === "tweejurk"){
            document.querySelector('.pagina2 .paginatweeblauwejurk').classList.remove('hidden');
        } else if(gekozenJurk === "tweegeeljurk"){
            document.querySelector('.pagina2 .paginatweegelejurk').classList.remove('hidden');
        }
    } toonGekozenJurken()

    function toonGekozenOnderkleding(){
        if(gekozenOnderkleding === "tweerokje"){
            document.querySelector('.pagina2 .paginatweerok').classList.remove('hidden');
        } else if(gekozenOnderkleding === "tweepantalon"){
            document.querySelector('.pagina2 .paginatweepantalon').classList.remove('hidden');
        }
    }  toonGekozenOnderkleding()

    function toonGekozenBovenkleding(){
        } if(gekozenBovenkleding === "tweebloesje"){
            document.querySelector('.pagina2 .paginatweebloesje').classList.remove('hidden');
        } else if(gekozenBovenkleding === "tweeshirt"){
            document.querySelector('.pagina2 .paginatweeshirt').classList.remove('hidden');
        } toonGekozenBovenkleding()

    function toonGekozenSchoenen(){
        } if(gekozenSchoenen === "tweeconverse"){
            document.querySelector('.pagina2 .paginatweeconverse').classList.remove('hidden');
        } else if(gekozenSchoenen === "tweewitteschoenen"){
            document.querySelector('.pagina2 .paginatweeschoenen').classList.remove('hidden');
        } toonGekozenSchoenen()
    }
        // Hier heb ik een function in een function gezet. Dit komt omdat als je naar pagina 2 gaat (met function paginaVeranderen) gelijk de functions van het tonen van de eerder aangeklikte kledingstukken hiermee aanzet.

function cijferTonen(){
    document.querySelector("p").textContent = " "+ juryNummer
    if(juryNummer <= 5){
    document.querySelector("p").textContent = "We vinden het niet mooi. Je krijgt een 5"
    } else if(juryNummer == 6){
    document.querySelector("p").textContent = "Netjes, we geven je een 6"
    } else if(juryNummer == 7){
    document.querySelector("p").textContent = "Prachtig, je krijgt een 7"
    } else if(juryNummer == 8){
    document.querySelector("p").textContent = "Heel erg mooi, je verdient een 8"
    } else if(juryNummer == 9){
    document.querySelector("p").textContent = "Super mooi gemaakt! Een welverdiende 9"
    } else if(juryNummer == 10){
    document.querySelector("p").textContent = "Dit is echt fabulous! Je krijgt een 10"
    }
    }

blauweJurk.addEventListener('click', toonBlauweJurk);
geleJurk.addEventListener('click', toonGeleJurk );
rokje.addEventListener('click', toonRokje);
pantalon.addEventListener('click', toonPantalon);
bloesje.addEventListener('click', toonBloesje);
shirt.addEventListener('click', toonShirt);
converse.addEventListener('click', toonConverse);
schoenen.addEventListener('click', toonSchoenen);

buttonKlaar.addEventListener('click', paginaVeranderen);
buttonCijfer.addEventListener('click', cijferTonen);


