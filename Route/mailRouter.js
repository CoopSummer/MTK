"use strict";
exports.__esModule = true;
exports.mailRouter = void 0;
var express_1 = require("express");
var mailController_1 = require("../controllers/mailController");
var mailRouter = express_1["default"].Router();
exports.mailRouter = mailRouter;
mailRouter.post('/sendmail', mailController_1.mailController.post);
