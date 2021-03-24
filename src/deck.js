class Deck {
  constructor(totalCards) {
    this.totalCards = totalCards;
  }
  countCards() {
    return this.totalCards.length;
  }
}

module.exports = Deck;
