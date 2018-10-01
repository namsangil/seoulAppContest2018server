var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchRecommendSchema = new Schema({
    keyword : { type: String, default: '' },
});

module.exports = mongoose.model('searchRecommend', searchRecommendSchema);

