import { Request, Response } from 'express';
import { sendmail } from '../config/nodemailer';


const post = async (req: Request, res: Response): Promise<any> => {
  try {
    await sendmail(req.body.email, req.body.name, req.body.text);
    return res.status(401).json({
      msg: 'success',
    });
  } catch (error) {
    return res.status(500).send({
      msg: error.message,
    });
  }
};

const mailController = {
  post,
};

export { mailController };
