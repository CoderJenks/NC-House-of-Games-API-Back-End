const reviewsRouter = require("express").Router();
const { getReviewById, patchReviewById, getReviews } = require("../controllers/reviews-controller");

reviewsRouter
.route("/:review_id")
.get(getReviewById)
.patch(patchReviewById);

reviewsRouter
.route("/")
.get(getReviews)

module.exports = reviewsRouter;