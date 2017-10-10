// game-logs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const gameLogs = new Schema({
    game: { type: Schema.Types.ObjectId, ref: 'games', required: true },
    player: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    positionHit: { type: Number, required: true },
    foundFlag: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('gameLogs', gameLogs);
};
