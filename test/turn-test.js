const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

describe('Turns', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user\'s guess', function () {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn ('Atlantic', card);
    expect(turn.guess).to.equal('Atlantic');
  });

  it.skip('should store current card in play', function () {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn ('Atlantic', card);
    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should return guess', function () {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn ('Atlantic', card);

    const guess1 = turn.returnGuess();
    expect(guess1).to.equal('Atlantic');
  });

  it.skip('should return card', function () {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn ('Atlantic', card);
    expect(turn.returnCard().to.equal(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific'));
  });

  it.skip('should evaluate guess', function () {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn ('Pacific', card);
    const guess1 = turn.returnGuess();
    expect(turn.evaluateGuess(guess1).to.equal('Pacific'));
  });

  it.skip('should give feedback', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn1 = new Turn ('Atlantic', card);
    const turn2 = new Turn ('Pacific', card);
    const guess1 = turn1.returnGuess();
    const guess2 = turn2.returnGuess();
    
    turn1.evaluateGuess(guess1);
    expect(turn1.giveFeedback().to.equal('Incorrect!'));
    turn2.evaluateGuess(guess2);
    expect(turn2.giveFeedback().to.equal('Correct'));
  })
})
