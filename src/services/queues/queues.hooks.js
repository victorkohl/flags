const setSocketId = hook => {
  const { socket } = hook.params;
  hook.data = { socketId: socket.id };
};

const handleDisconnect = hook => {
  const { socket } = hook.params;
  socket.on('disconnect', () => {
    hook.service.remove(null, { socketId: socket.id });
  });
};

const checkMatch = async hook => {
  const [one, two] = await hook.service.shiftTwo();
  if (one && two) {
    hook.app.service('games').create({
      players: { one: one.socketId, two: two.socketId },
      currentTurn: one.socketId
    });
  }
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
    create: [handleDisconnect, checkMatch],
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
