const assert = require('assert');
const app = require('../../src/app');

describe("'game-moves' service", () => {
  it('registered the service', () => {
    const service = app.service('game-moves');

    assert.ok(service, 'Registered the service');
  });
});
