const butt1 = document.querySelector('#butt1');
const butt2 = document.querySelector('#butt2');
const butt3 = document.querySelector('#butt3');
const option = document.querySelector('option');
const latest_scores = document.querySelector('#latest-scores');

const playingTo = document.querySelector('#playingTo');

const first = document.querySelector('#first');
const second = document.querySelector('#second');

const bold = document.createElement('B');

let winningScore = 5;
let firstAmount = 0;
let secondAmount = 0;

let isGameOver = false;


butt1.addEventListener('click', (e) => {
   
    if (!isGameOver) {
        butt1.disabled = false;
        butt1.disabled = false;
        firstAmount++;
        first.innerText = firstAmount;

        if (firstAmount == playingTo.value) {

            let find = document.querySelector('#latest_scores');

            let text = document.createTextNode(firstAmount + " : " + secondAmount + " | ");
            let b=document.createElement('B');

            find.appendChild(text);
            
            isGameOver = true;
            butt1.disabled = true;
            butt2.disabled = true;
            // first.style.color="green";
            // second.style.color="red";
        }
        console.log(firstAmount);

        if (firstAmount == playingTo.value) {
            first.style.color = "green";
            second.style.color = "red";
        }
        else if (secondAmount == playingTo.value) {
            second.style.color = "green";
            first.style.color = "red";
        }
    }

})

butt2.addEventListener('click', (e) => {
    if (!isGameOver) {

        butt1.disabled = false;
        butt2.disabled = false;
        secondAmount++;
        second.innerText = secondAmount;

        if (secondAmount == playingTo.value) {
            let find = document.querySelector('#latest_scores');

            let text = document.createTextNode(firstAmount + " : " + secondAmount+" | ");

            find.appendChild(text);

            isGameOver = true;
            butt2.disabled = true;
            butt1.disabled = true;
            if (firstAmount == playingTo.value) {
                first.style.color = "green";
                second.style.color = "red";
            }
            else if (secondAmount == playingTo.value) {
                second.style.color = "green";
                first.style.color = "red";
            }
            // second.style.color="red";
        }

    }
})

butt3.addEventListener('click', () => {
    butt1.disabled = false;
    butt2.disabled = false;
    first.innerText = 0;
    second.innerText = 0;
    firstAmount = 0;
    secondAmount = 0;
    isGameOver = false;
    first.style.color = 'black';
    second.style.color = "black";


})

const firstValue = document.querySelector('#first').innerHTML;

playingTo.addEventListener('change', () => {
    console.log(playingTo.value);
    console.log(first.innerHTML);

    playToScore = parseInt(playingTo.value);


})






// setInterval(2000);



