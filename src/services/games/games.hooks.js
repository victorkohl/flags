const waitingList = require('../../hooks/waiting-list');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [waitingList()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
