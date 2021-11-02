const db = require('../db/connection.js');

exports.selectReviewById = (review_id) => {
    return db.query(`SELECT * FROM reviews WHERE review_id = $1;`,[review_id]
    )
    .then(({rows}) => rows[0])
};