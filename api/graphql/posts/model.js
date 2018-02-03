'use strict'
  
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: 'The title field is required'
  },
  body: {
    type: String,
    required: 'The body field is required'
  },
  author:{
    type: String,
    required: 'The author field is required'
  },
  email:{
    type: String
  }
}, {timestamps: true});

if (!schema.options.toJSON) schema.options.toJSON = {};

schema.options.toJSON.transform = (doc, ret) => {
  ret.id = ret._id;
  delete ret._id;
  return ret;
};

module.exports =  mongoose.model('Post', schema);