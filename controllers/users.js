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
};

module.exports = users;
