const mongoose = require('mongoose');


const PostsModel = mongoose.model(
    "defilons-crud-api",
    {
      
      title: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: false
      },
      videoUrl: {
        type: String,
        required: false
      },
      date: {
          type: Date,
          default: Date.now
      }
    },
    "defilons"
);

module.exports = { PostsModel };