const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData

describe('Game', function() {
  let cards;
  let deck1;
  let round;
  let game;
  beforeEach(function() {
    cards = prototypeQuestions.map((info) => {
      return new Card(info.id, info.question, info.answers, info.correctAnswer)
    });
    deck1 = new Deck(cards);
    round = new Round(deck1);
    game = new Game(round)
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', function() {
    expect(game.currentRound).to.equal(round);
  });

});
