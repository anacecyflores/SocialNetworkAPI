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
