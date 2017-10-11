// const waitListManager = require('../../wait-list-manager');

const setSocketId = hook => {
  const { socket } = hook.params;
  hook.data = { socketId: socket.id };
  socket.on('disconnect', () => {
    hook.service.remove(null, hook.data);
  });
};

const checkMatch = async hook => {
  const first = await hook.service.findFirst();
  if (first) {
    // to do: match
  }
  hook.result = { match: !!first };
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setSocketId],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [checkMatch],
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
