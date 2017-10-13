const MinesweeperFlags = require('minesweeper-flags');

const createFlagsGame = hook => {
  const game = new MinesweeperFlags();

  game.on('new-game', edge => {
    console.log(`New Game (${edge}x${edge})`);
  });
  game.on('position-hit', (x, y, flagHit, flagsNearby) => {
    console.log(
      `Position Hit (${x},${y}) flagHit=${flagHit}; flagsNearby=${flagsNearby}`
    );
  });
  game.on('turn-changed', playerId => {
    console.log(`Turn Changed (id=${playerId})`);
  });
  game.on('points-changed', (playerId, points) => {
    console.log(`Points Changed (id=${playerId}, points=${points})`);
  });
  game.on('game-over', () => {
    console.log(`Game Over`);
  });
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [createFlagsGame],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
