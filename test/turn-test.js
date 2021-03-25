const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

describe('Turns', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Atlantic', card);
    expect(turn.guess).to.equal('Atlantic');
  });

  it('should store current card in play', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Atlantic', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should return guess', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Atlantic', card);

    const guess1 = turn.returnGuess();
    expect(guess1).to.equal('Atlantic');
  });

  it('should return card', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Atlantic', card);

    const card1 = turn.returnCard();
    expect(card1).to.equal(card);
  });

  it('should evaluate negative guess', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Atlantic', card);
    const guess1 = turn.evaluateGuess();
    expect(guess1).to.equal(false);
  });

  it('should evaluate positive guess', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn = new Turn('Pacific', card);
    const guess1 = turn.evaluateGuess();
    expect(guess1).to.equal(true);
  })

  it('should give positive feedback', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn1 = new Turn('Pacific', card);
    const guess1 = turn1.giveFeedback();

    expect(guess1).to.equal('Correct!');
  });

  it('should give negative feedback', function() {
    const card = new Card(1, 'Name the world\'s largest ocean', ['Pacific', 'Atlantic', 'Artic'], 'Pacific');
    const turn1 = new Turn('Atlantic', card);
    const guess1 = turn1.giveFeedback();

    expect(guess1).to.equal('Incorrect!');
  })
})
