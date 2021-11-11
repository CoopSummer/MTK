import express from 'express';
import { mailController } from '../controllers/mailController';

const mailRouter = express.Router();

mailRouter.post('/sendmail',
  mailController.post
);

export {mailRouter} ;
