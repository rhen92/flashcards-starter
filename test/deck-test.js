const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck;
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold all of the cards', function() {
    //this.totalCards = totalCards
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.totalCards).to.deep.equal([card1, card2, card3]);
  });

  it('should count cards', function() {
    //deck.countCards() => 3
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck = new Deck([card1, card2, card3]);
    let numCards = deck.countCards()
    expect(numCards).to.equal(3);
  });
})
