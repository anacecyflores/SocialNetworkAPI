const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/users.js");

router.route("/").get(getAllUsers).post(createUser);

// router.route("/:id").get(getUserById).put (updateUser).delete(deleteUser);

module.exports = router;
