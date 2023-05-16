//grab the score id
//make function for score to go up when pressed by buttons




let score = document.getElementById('homeScore');
let awayScore = document.getElementById('awayScore')

let scoreAway = 0;
let homeScore = 0


function pointOneHome() {
   homeScore += 1;
   score.textContent = homeScore;
}

function pointTwoHome() {
   homeScore += 2;
   score.textContent = homeScore;
}

function pointThreeHome() {
   homeScore += 3;
   score.textContent = homeScore;
}

function pointOneAway() {
   scoreAway += 1;
   awayScore.textContent = + scoreAway;
}

function pointTwoAway() {
   scoreAway += 2;
   awayScore.textContent = scoreAway;
}

function pointThreeAway() {
   scoreAway += 3;
   awayScore.textContent = scoreAway;
}

function newGame() {
   scoreAway = 0;
   homeScore = 0;

   awayScore.textContent = scoreAway;
   score.textContent = homeScore;
}