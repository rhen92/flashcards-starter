const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck1;
  let round;
  beforeEach(function() {
    card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    deck1 = new Deck([card1, card2, card3]);
    round = new Round(deck1);
  });

  it('should be a function', function() {
    const round = new Round;
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should contain the deck of cards', function() {
    expect(round.deck).to.deep.equal(deck1);
  })

  it('should return current card being played', function() {
    const turn = new Turn('Atlantic', card1);
    const currentCard = round.returnCurrentCard(turn);
    expect(currentCard).to.equal(card1);
  });

  it('should start at 0 turns by default', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should increase turns when a turn is taken', function() {
    const turn = new Turn('Atlantic', card1);
    const guess1 = round.takeTurn(turn);
    expect(round.turns).to.equal(1);
  });

  it('should return negative feedback after taking a turn if incorrect', function() {
    const turn = new Turn('Atlantic', card1);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(round.takeTurn(turn)).to.equal('Incorrect!');
  });

  it('should return positive feedback after taking a turn if correct', function() {
    const turn = new Turn('Pacific', card1);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(round.takeTurn(turn)).to.equal('Correct!');
  })

  it('should record incorrect guesses', function() {
    const turn = new Turn('Atlantic', card1);
    turn.evaluateGuess();
    turn.giveFeedback();
    round.takeTurn(turn);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should move on to next card if correct guess was given', function() {
    const turn = new Turn('Pacific', card1);
    turn.evaluateGuess();
    turn.giveFeedback();
    round.takeTurn(turn);
    const turn2 = new Turn('3000', card2)
    const changeCard = round.returnCurrentCard(turn2);
    expect(changeCard).to.equal(card2);
  });


})
