const path = require('path');
const express = require('express');
const cors = require('cors');
const ratelimiter = require('express-rate-limit');
const helmet = require('helmet');
const sanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const appError = require('./utils/newAppError');
const viewRouter = require('./routes/viewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingcons');
const errorHandling = require('./controllers/errorcons');
const reviewsRouter = require('./routes/reviews');
const propertiesRouter = require('./routes/toursRouters/tours');
const usersRouter = require('./routes/usersRouters/users');
const app = express();
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join('views'));
app.enable('trust proxy');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(sanitize());
app.use(xss());
app.use(compression());
app.use(
    hpp({
        whitelist: [
            'duration',
            'ratingsQuantity',
            'ratingsAverage',
            'maxGroupSize',
            'difficulty',
            'price',
        ],
    })
);
//VIEW ROUTES
app.post(
    '/webhook-checkout',
    express.raw({ type: 'application/json' }),
    bookingController.webhookCheckout
);
app.use(express.json({ limit: '10kb' }));
app.use('/', viewRouter);
//API ROUTES
app.use('/api/v1/properties', propertiesRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/bookings', bookingRouter);
app.all('*', (req, res, next) => {
    next(
        new appError(
            `no page for ${req.originalUrl} URL found on the server!`,
            404
        )
    );
});

app.use(errorHandling);
module.exports = app;
