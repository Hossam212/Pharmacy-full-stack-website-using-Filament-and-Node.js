const express = require('express');
const userauth = require('../controllers/authcons');
const tourscons = require('../controllers/tourscons');
const reviewcons = require('../controllers/reviewcons');
const usercons = require('../controllers/userscons');
const bookingcons = require('../controllers/bookingcons');
const viewsController = require('../controllers/viewsCons');
const stripe = require('stripe')(
    'sk_test_51NQgLnAMjq2DeMy9A7xS45xOW9szVuI7Szxl3rp1EiBdHkyygkLydVNsqMjYiLI50iGb75S9cJ8DzVytRqMiSMGr00ZVjYUqa3'
);
const bookingController = require('../controllers/bookingcons');
const CSP = 'Content-Security-Policy';
const POLICY =
    "default-src 'self' https://*.mapbox.com https://checkout.stripe.com;" +
    "base-uri 'self';block-all-mixed-content;" +
    "font-src 'self' https://fonts.gstatic.com;" +
    "frame-ancestors 'self';" +
    "frame-src 'self' https://js.stripe.com;" +
    "img-src http://localhost:8000 'self' blob: data:;" +
    "object-src 'none';" +
    "script-src https: cdn.jsdelivr.net cdnjs.cloudflare.com api.mapbox.com 'self' blob: https://js.stripe.com;" +
    "script-src-attr 'none';" +
    "style-src 'self' https: 'unsafe-inline' https://fonts.googleapis.com;" +
    'upgrade-insecure-requests;';

const router = express.Router();
router.use(viewsController.alerts);
router.use((req, res, next) => {
    res.setHeader(CSP, POLICY);
    next();
});
router.get('/secret', async (req, res) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
    });
    res.json({ client_secret: intent.client_secret });
});
router.get('/checkAuth', userauth.isLoggedIn);
router.get('/products', viewsController.getAllTours);
router.get('/me', userauth.protect, viewsController.getMe);
router.get('/my-tours', userauth.protect, viewsController.getMyTours);
router.get('/signup', viewsController.getSignUp);
router.post('/signup', userauth.signup);
router.get('/my-reviews', userauth.protect, viewsController.getUserReviews);
router.get('/my-reviews/:id', userauth.protect, viewsController.getEditReview);
router.post('/filter', userauth.protect, viewsController.getFilteredProperties);
router.get(
    '/manage-bookings',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getAllBookings
);
router.get(
    '/manage-users',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getAllUsers
);
router.get(
    '/manage-users/:id/update',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getUpdateUser
);
router.get(
    '/manage-tours/new-tour',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getCreateTour
);
router.get(
    '/manage-tours',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getAllTours
);
router.get(
    '/manage-tours/:id',
    userauth.protect,
    userauth.restrictTo('admin'),
    viewsController.getUpdateTour
);
router.post(
    '/manage-tours',
    userauth.protect,
    userauth.restrictTo('admin'),
    tourscons.uploadTourImages,
    tourscons.resizeTourImages,
    tourscons.createTour
);
router.post(
    '/manage-tours/:id/delete',
    userauth.protect,
    userauth.restrictTo('admin'),
    tourscons.deleteTour
);
router.post(
    '/manage-tours/:id',
    userauth.protect,
    userauth.restrictTo('admin'),
    tourscons.uploadTourImages,
    tourscons.resizeTourImages,
    tourscons.updateTour
);
router.post(
    '/manage-tours/:id/update-video',
    userauth.protect,
    userauth.restrictTo('admin'),
    tourscons.uploadTourVideo,
    tourscons.saveTourVideo,
    tourscons.updateTour
);
router.post(
    '/submitReview',
    userauth.protect,
    userauth.restrictTo('user', 'admin'),
    reviewcons.makeReview
);
router.post(
    '/my-reviews/update-review/:id',
    userauth.protect,
    userauth.restrictTo('user', 'admin'),
    reviewcons.updateReview
);
router.post(
    '/my-reviews/delete-review/:id',
    userauth.protect,
    userauth.restrictTo('user', 'admin'),
    reviewcons.deleteReview
);
router.post(
    '/manage-users/:id/update',
    userauth.protect,
    userauth.restrictTo('admin'),
    usercons.uploadUserPhoto,
    usercons.resizeUserPhoto,
    usercons.updateUser
);
router.post(
    '/manage-users/:id',
    userauth.protect,
    userauth.restrictTo('admin'),
    usercons.deleteUser
);
router.post(
    '/manage-bookings/:id',
    userauth.protect,
    userauth.restrictTo('admin'),
    bookingcons.deleteBooking
);

router.get('/login', userauth.isLoggedIn, viewsController.getLoginForm);
module.exports = router;
