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

router.route("/:id").get(getUsersById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend);
// .delete(deleteFriend);

module.exports = router;
