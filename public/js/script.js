const homeScore = document.getElementById('homeScore');
const guestScore = document.getElementById('guestScore');
const resetHome = document.getElementById('resetHome');
const resetGuest = document.getElementById('resetGuest');

const btn1Home = document.getElementById('btn1Home');
const btn2Home = document.getElementById('btn2Home');
const btn3Home = document.getElementById('btn3Home');

const btn1Guest = document.getElementById('btn1Guest');
const btn2Guest = document.getElementById('btn2Guest');
const btn3Guest = document.getElementById('btn3Guest');

let scoreHome = 0;
let scoreGuest = 0;


btn1Home.addEventListener('click', () => {
    scoreHome = scoreHome + 1;
    homeScore.textContent = scoreHome;
});

btn2Home.addEventListener('click', () => {
    scoreHome = scoreHome + 2;
    homeScore.textContent = scoreHome;
});

btn3Home.addEventListener('click', () => {
    scoreHome = scoreHome + 3;
    homeScore.textContent = scoreHome;
});

btn1Guest.addEventListener('click', () => {
    scoreGuest = scoreGuest + 1;
    guestScore.textContent = scoreGuest;
});

btn2Guest.addEventListener('click', () => {
    scoreGuest = scoreGuest + 2;
    guestScore.textContent = scoreGuest;
});

btn3Guest.addEventListener('click', () => {
    scoreGuest = scoreGuest + 3;
    guestScore.textContent = scoreGuest;
});

resetHome.addEventListener('click', () => {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
});

resetGuest.addEventListener('click', () => {
    scoreGuest = 0;
    guestScore.textContent = scoreGuest;
});

