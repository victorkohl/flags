// Initializes the `queue-positions` service on path `/queue-positions`
const Service = require('feathers-memory').Service;
const hooks = require('./queue-positions.hooks');
const filters = require('./queue-positions.filters');

/**
 * Queue Positions service class.
 */
class QueuePositions extends Service {
  /**
   * Finds the first player in queue.
   * @param {object} query query object
   * @return {Promise<Object|undefined>} the first player or undefined
   */
  async findFirst() {
    const results = await super.find({
      $limit: 1,
      $sort: {
        id: 1
      }
    });

    return results.data[0];
  }
}

module.exports = function() {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'queue-positions',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/queue-positions', new QueuePositions(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('queue-positions');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
