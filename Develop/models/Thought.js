const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    reactionId: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId(),},
    reactionBody: {type: String, required: true, maxLength: 280},
    username:{type: String, required: true},
    createdAt: {type: Date, default: Date.now}
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, maxlength: 280},
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {type: String, required: true, },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('formattedCreatedAt').get(function () {
  return this.reactions.length; // Customize the formatting as desired
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
