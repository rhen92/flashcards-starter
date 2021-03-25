class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(turn) {
    return turn.currentCard;
  }

  takeTurn(turn) {
    this.turns++;
    turn.evaluateGuess();
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
}

module.exports = Round;
