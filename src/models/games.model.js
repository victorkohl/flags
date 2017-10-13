// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const games = new Schema({
    players: {
      one: { type: String },
      two: { type: String }
    },
    score: {
      one: { type: Number, default: 0 },
      two: { type: Number, default: 0 }
    },
    currentTurn: { type: String },
    winner: { type: String },
    winReason: {
      type: String,
      enum: ['mostFlags', 'opponentLeft']
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', games);
};
