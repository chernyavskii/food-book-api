var express = require('express');

module.exports = (userService, config) => {
    const router = express.Router();

    const userController = require('./user')(userService, promiseHandler);

    router.use('/users', userController);

    return router;
};

function promiseHandler(res, promise) {
    promise
        .then((data) => res.json(data))
        .catch((err) => res.error(err));
}