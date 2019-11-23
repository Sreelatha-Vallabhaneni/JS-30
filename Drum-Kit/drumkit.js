const keyA = document.querySelector('.A');
keyA.textContent = 'A';
const keyS = document.querySelector(".S");
keyS.textContent = "S";
const keyD = document.querySelector(".D");
keyD.textContent = "D";
const keyF = document.querySelector(".F");
keyF.textContent = "F";
const keyG = document.querySelector(".G");
keyG.textContent = "G";
const keyH = document.querySelector(".H");
keyH.textContent = "H";
const keyJ = document.querySelector(".J");
keyJ.textContent = "J";
const keyK = document.querySelector(".K");
keyK.textContent = "K";
const keyL = document.querySelector(".L");
keyL.textContent = "L";

/*function selectQuery(key){
    const newKey = document.querySelector("."+ `${"key"}`).textContent = key;
    console.log(newKey);
}
selectQuery(L)*/

// Create eventlistener for play audio
document.body.addEventListener('keydown', e => {
    if (e.keyCode === 65) {
      const audio1 = document.querySelector(".audio1");
      audio1.play();
    } else if (e.keyCode === 83) {
        const audio2 = document.querySelector(".audio2");
        audio2.play();
    } else if (e.keyCode === 68) {
        const audio3 = document.querySelector(".audio3");
        audio3.play();
    } else if (e.keyCode === 70) {
        const audio4 = document.querySelector(".audio4");
        audio4.play();
    } else if (e.keyCode === 71) {
        const audio5 = document.querySelector(".audio5");
        audio5.play();
    } else if (e.keyCode === 72) {
        const audio6 = document.querySelector(".audio6");
        audio6.play();
    } else if (e.keyCode === 74) {
        const audio7 = document.querySelector(".audio7");
        audio7.play();
    } else if (e.keyCode === 75) {
        const audio8 = document.querySelector(".audio8");
        audio8.play();
    } else if (e.keyCode === 76) {
        const audio9 = document.querySelector(".audio9");
        audio9.play();
    }
})
