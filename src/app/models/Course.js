const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoID: { type: String },
        level: { type: String },
        numberLesson: { type: String },
        time: { type: String },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
