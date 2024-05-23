const mongoose = require('mongoose');
const User = require('./user_schema');
const slugify = require('slugify');
const productsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        manufacturer: {
            type: String,
            required: true,
        },
        images: [String],
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);
productsSchema.index({ price: 1 });
productsSchema.index({ slug: 1 });
productsSchema.index({ location: '2dsphere' });
//VIRTUAL POPULATE
productsSchema.virtual('reviews', {
    ref: 'review',
    foreignField: 'product',
    localField: '_id',
});
//-----

productsSchema.pre('save', function (next) {
    this.slug = slugify(this.name);
    next();
});
const products = mongoose.model('products', productsSchema);

module.exports = products;
