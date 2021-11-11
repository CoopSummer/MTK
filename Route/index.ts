const express = require('express');
const router = express.Router();
import { mailRouter } from './mailRouter';

router.use('/mail', mailRouter);


export { router };
