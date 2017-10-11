const assert = require('assert');
const app = require('../../src/app');

describe("'queue-positions' service", () => {
  it('registered the service', () => {
    const service = app.service('queue-positions');

    assert.ok(service, 'Registered the service');
  });
});
