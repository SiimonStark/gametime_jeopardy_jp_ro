import Player from '../src/Players';
import domUpdates from '../src/domUpdates';

import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);
chai.spy.on(domUpdates, ["correctAns", "wrongAns", "updateScore", "findjQuery"], () => true)


describe('Player', () => {
  
  it('should have default properties', () => {
    const player = new Player('Squirtle')
    expect(player).to.be.an.instanceOf(Player); expect(player.name).to.equal('Squirtle');
    expect(player.score).to.equal(0);
  });
  
  it('should increase player score when correct answer', () => {
    const player = new Player('Squirtle');
    expect(domUpdates.findjQuery).to.have.been.called;
    const scoreBefore = player.score;
    const scoreAfter = player.score;
    const difference = scoreAfter + scoreBefore;
    expect(player.score).to.equal(difference);
  });
});