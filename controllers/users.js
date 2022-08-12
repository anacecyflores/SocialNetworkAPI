const { userModel, thoughtModel } = require("../models");

const users = {
  getAllUsers(req, res) {
    userModel
      .find({})
      .then((userDataDB) => res.json(userDataDB))
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  getUsersById(req, res) {
    userModel
      .findOne({ _id: req.params.id })
      .select("-__v")
      .then((userDataDB) => {
        if (!userDataDB) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userDataDB);
      })
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  createUser(req, res) {
    userModel
      .create(req.body)
      .then((userDataDB) => res.json(userDataDB))
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    userModel
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .then((userDataDB) => {
        if (!userDataDB) {
          res.status(404).json({ message: "Can't Find User With This Id!" });
          return;
        }
        res.json(userDataDB);
      })
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  deleteUser(req, res) {
    userModel
      .findOneAndDelete({ _id: req.params.id })
      .then((userDataDB) => {
        if (!userDataDB) {
          res.status(404).json({ message: "This user does not exist!" });
          return;
        }
        res.json(userDataDB);
      })
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },

  addFriend(req, res) {
    userModel
      .findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true }
      )
      .then((friendDataDB) => {
        if (!friendDataDB) {
          res.status(404).json({ message: "Can't Friend With This Id!" });
          return;
        }
        res.json(friendDataDB);
      })
      .catch((err) => {
        console.error({ message: err });
        res.status(500).json(err);
      });
  },
};

module.exports = users;
