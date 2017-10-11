const waitListManager = require('../wait-list-manager');

module.exports = function() {
  return function(hook) {
    // console.log(hook.params)
    const result = waitListManager.addOrMatch(hook.params.socket);
    if (result) {
      // to do
    }

    hook.result = { queued: !result };
  };
};
