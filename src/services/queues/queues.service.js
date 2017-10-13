// Initializes the `queues` service on path `/queues`
const Service = require('feathers-memory').Service;
const hooks = require('./queues.hooks');
const filters = require('./queues.filters');

/**
 * Queues service class.
 */
class QueuesService extends Service {
  /**
   * Shifts the first two players from the queue.
   * @todo refactor using redis
   * @param {object} query query object
   * @return {Promise<Object|undefined>} the first player or undefined
   */
  async shiftTwo() {
    const { data } = await super.find({
      $limit: 2,
      $sort: {
        id: 1
      }
    });

    const enoughPlayers = this._shiftPlayers(data);

    return enoughPlayers ? data : [];
  }

  /**
   * Shifts the first two players.
   * @param {Array<Object>} data array of first two players on queue
   * @return {Boolean}
   */
  _shiftPlayers(data) {
    if (data.length === 2) {
      super.remove(data[0].id);
      super.remove(data[1].id);
      return true;
    }
    return false;
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
