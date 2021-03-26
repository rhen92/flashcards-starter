const Game = require('./src/Game');
const Round = require('./src/round');
const Card = require('./src/Card');
const Deck = require('./src/deck');
const Turn = require('./src/turn');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

var cards = prototypeQuestions.map((info) => {
  return new Card(info.id, info.question, info.answers, info.correctAnswer)
});
var deck1 = new Deck(cards);
var round = new Round(deck1);
var game = new Game(round);
game.start();
