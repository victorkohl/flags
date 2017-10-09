// Initializes the `game-moves` service on path `/game-moves`
const createService = require('feathers-mongoose');
const createModel = require('../../models/game-moves.model');
const hooks = require('./game-moves.hooks');
const filters = require('./game-moves.filters');

module.exports = function() {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'game-moves',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game-moves', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('game-moves');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
