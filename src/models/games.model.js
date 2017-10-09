// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const games = new Schema({
    field: [
      {
        position: { type: Number, required: true },
        hasFlag: { type: Boolean, default: false },
        isHit: { type: Boolean, default: false },
        flagsAround: { type: Number, default: 0, required: true }
      }
    ],
    players: {
      one: { type: Schema.Types.ObjectId, ref: 'users', required: true },
      two: { type: Schema.Types.ObjectId, ref: 'users', required: true }
    },
    score: {
      one: { type: Number, default: 0 },
      two: { type: Number, default: 0 }
    },
    currentTurn: { type: Schema.Types.ObjectId, ref: 'users' },
    winner: { type: Schema.Types.ObjectId, ref: 'users' },
    winReason: {
      type: String,
      enum: ['mostFlags', 'opponentLeft'],
      default: 'mostFlags'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', games);
};
