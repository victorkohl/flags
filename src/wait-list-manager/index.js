const waitingList = [];

module.exports = {
  addOrMatch(socket) {
    if (waitingList.length >= 1) {
      const [one, two] = [waitingList.shift(), socket];
      return { players: { one, two } };
    } else {
      socket.on('disconnect', () => {
        const index = waitingList.indexOf(socket);
        if (index !== -1) {
          waitingList.splice(index, 1);
        }
      });
      waitingList.push(socket);
      console.log('Added player to waiting list', socket.id);
    }
  }
};
