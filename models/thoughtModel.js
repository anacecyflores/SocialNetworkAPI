const { Schema, model, Types } = require("mongoose");

// const reactionSchema = new Schema(
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (formatDate) =>
//         `${formatDate.toLocaleDateString()} ${formatDate.toLocaleTimeString()}`,
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (formatDate) =>
        `${formatDate.toLocaleDateString()} ${formatDate.toLocaleTimeString()}`,
    },
    username: {
      type: String,
      required: true,
    },
    // reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thoughtModel = model("thoughtModel", thoughtSchema);

module.exports = thoughtModel;
