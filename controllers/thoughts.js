const { thoughtModel, userModel } = require("../models");

const thoughts = {
  getAllThoughts(req, res) {
    thoughtModel
      .find({})
      .then((thoughtDataDB) => res.json(thoughtDataDB))
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  //   getThoughtById(req, res) {
  //     thoughtModel
  //       .findOne({ _id: req.params.id })
  //       .select("-__v")
  //       .then((thoughtDataDB) => {
  //         if (!thoughtDataDB) {
  //           res.status(404).json({ message: "No user found with this id!" });
  //           return;
  //         }
  //         res.json(thoughtDataDB);
  //       })
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },

  //   createThought(req, res) {
  //     thoughtModel
  //       .create(req.body)
  //       .then((thoughtDataDB) => res.json(thoughtDataDB))
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },

  //   updateThought(req, res) {
  //     thoughtModel
  //       .findOneAndUpdate(
  //         { _id: req.params.id },
  //         { $set: req.body },
  //         { runValidators: true, new: true }
  //       )
  //       .then((thoughtDataDB) => {
  //         if (!thoughtDataDB) {
  //           res.status(404).json({ message: "Can't Find Thought With This Id!" });
  //           return;
  //         }
  //         res.json(thoughtDataDB);
  //       })
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },

  //   deleteModel(req, res) {
  //     thoughtModel
  //       .findOneAndDelete({ _id: req.params.id })
  //       .then((thoughtDataDB) => {
  //         if (!thoughtDataDB) {
  //           res.status(404).json({ message: "This thought does not exist!" });
  //           return;
  //         }
  //         res.json(thoughtDataDB);
  //       })
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },

  //   addFriend(req, res) {
  //     userModel
  //       .findOneAndUpdate(
  //         { _id: req.params.userId },
  //         { $push: { friends: req.params.friendId } },
  //         { new: true }
  //       )
  //       .then((friendDataDB) => {
  //         if (!friendDataDB) {
  //           res.status(404).json({ message: "Can't Friend With This Id!" });
  //           return;
  //         }
  //         res.json(friendDataDB);
  //       })
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },

  //   deleteFriend(req, res) {
  //     userModel
  //       .findOneAndUpdate(
  //         { _id: req.params.userId },
  //         { $pull: { friends: req.params.friendId } },
  //         { new: true }
  //       )
  //       .then((friendDataDB) => {
  //         if (!friendDataDB) {
  //           res.status(404).json({ message: "This friend does not exist!" });
  //           return;
  //         }
  //         res.json(friendDataDB);
  //       })
  //       .catch((err) => {
  //         console.error({ message: err });
  //         res.status(500).json(err);
  //       });
  //   },
};

module.exports = thoughts;
