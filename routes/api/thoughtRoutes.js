const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts.js");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getThoughtById).put(updateThought);
//   .delete(deleteThought);

// router.route("/:thoughtId/thoughts/").post(addThought).delete(deleteThought);

module.exports = router;
