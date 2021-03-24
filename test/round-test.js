const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round;
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should contain the deck of cards', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    expect(round.deck).to.deep.equal(deck1);
  })

  it.skip('should return current card being played', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
  });

  it.skip('should start at 0 turns by default', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    expect(round.turns).to.equal(0);
  });

  it.skip('should start with no incorrect guesses', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should increase turns when a turn is taken', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const turn = new Turn('Atlantic', card);
    expect(round.takeTurn().to.increase(round.turns).by(1));
  });

  it.skip('should return negative feedback after taking a turn if incorrect', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const turn = new Turn('Atlantic', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(round.takeTurn().to.equal('Incorrect!'));
  });

  it.skip('should return positive feedback after taking a turn if correct', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const turn = new Turn('Pacific', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(round.takeTurn().to.equal('Correct!'));
  })

  it.skip('should evaluate and record incorrect guesses', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const turn = new Turn('Atlantic', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal('Atlantic');
  });

  it.skip('should evaluate and move on to next card if correct guess was given', function() {
    const card1 = new Card(1, 'Name the world\'s largest ocean.', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const card2 = new Card(2, 'How many taste buds does the average human tongue have?', ['3000', '5000', '10,000', '15,000'], '10,000');
    const card3 = new Card(3, 'What is the largest big cat?', ['Lion', 'Tiger', 'Cheetah'], 'Tiger');
    const deck1 = new Deck([card1, card2, card3]);
    const round = new Round(deck1);
    const turn = new Turn('Pacific', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    round.takeTurn();
    expect(round.returnCurrentCard().to.equal(card2));
  });


})
