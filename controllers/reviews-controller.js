const { sort } = require("methods");
const { selectReviewById, updateReviewById, selectReviews, selectCommentsByReview, insertCommentByReview } = require("../models/reviews-model.js");

exports.getReviewById = (req, res, next) => {
    const {review_id} = req.params;
    selectReviewById(review_id)
    .then((review) => {
        res.status(200).send({review});
    })
    .catch(next);
};

exports.patchReviewById = (req, res, next) => {
    const {review_id} = req.params;    
    const userInput = req.body

    updateReviewById(review_id, userInput)
    .then(() => selectReviewById(review_id))
    .then((review) => {
        res.status(200).send({review});
    })
    .catch(next);
}

exports.getReviews = (req, res, next) => {
    const { sort_by , order, category } = req.query;
    let sort_by_string = sort_by;
    if(sort_by !== undefined){sort_by_string = '"'+sort_by+'"'};

    selectReviews(sort_by_string, order, category)
    .then((reviews) => {
        res.status(200).send({reviews});
    })
    .catch(next);
};

exports.getCommentsByReview = (req, res, next) => {
    const {review_id} = req.params;

    selectCommentsByReview(review_id)
    .then((comments) => {
        res.status(200).send({comments});
    })
    .catch(next);
}

exports.postCommentByReview = (req, res, next) => {
    const {review_id} = req.params;
    const {body, author} = req.body

    insertCommentByReview(body, author, review_id)
    .then((comment) => {
        res.status(201).send({msg: "comment created",comment: comment});
    })
    .catch(next);
}