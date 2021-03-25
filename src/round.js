const Card = require('../src/Card');
const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.totalCards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    const index = this.deck.totalCards.indexOf(this.currentCard) + 1;
    this.currentCard = this.deck.totalCards[index]
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === this.turns) {
      const percentCorrect = (0 / this.incorrectGuesses.length) * 100;
      return percentCorrect;
    } else {
      const percentageCorrect = (this.incorrectGuesses.length / this.turns) * 100;
      return percentageCorrect;
    }
  }

  endRound() {
    if(!this.currentCard) {
      return `** Round Over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    }
  }
}
module.exports = Round;
