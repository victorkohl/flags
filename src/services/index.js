const users = require('./users/users.service.js');
const games = require('./games/games.service.js');
const gameLogs = require('./game-logs/game-logs.service.js');
const queues = require('./queues/queues.service.js');
module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(games);
  app.configure(gameLogs);
  app.configure(queues);
};
