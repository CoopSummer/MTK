"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
var mailRouter_1 = require("./mailRouter");
router.use('/mail', mailRouter_1.mailRouter);
