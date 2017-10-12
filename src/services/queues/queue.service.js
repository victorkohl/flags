// Initializes the `queues` service on path `/queues`
const Service = require('feathers-memory').Service;
const hooks = require('./queues.hooks');
const filters = require('./queues.filters');

/**
 * Queues service class.
 */
class QueuesService extends Service {
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
    name: 'queues',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/queues', new QueuesService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('queues');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
