// Initializes the `game-logs` service on path `/game-logs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/game-logs.model');
const hooks = require('./game-logs.hooks');
const filters = require('./game-logs.filters');

module.exports = function() {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'game-logs',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game-logs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('game-logs');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
