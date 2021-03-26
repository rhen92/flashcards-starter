const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map((info) => {
      return new Card(info.id, info.question, info.answers, info.correctAnswer)
    });
    const deck1 = new Deck(cards);
    this.currentRound = new Round(deck1);
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.currentRound.endRound();
  }
}

module.exports = Game;
