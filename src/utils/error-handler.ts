import { Response } from 'express';
import { HttpException } from '@exceptions';
import logger from '@config/logger'

const errorHandler = (
    err: Error,
    res: Response
) => {
    logger.error(err)
    // exception controlada
    if (err instanceof HttpException) {
        return res
            .status(err.status)
            .json({ status: err.status, error: err.message });
    }
    // exception interna
    if (err instanceof Error) {
        return res
            .status(500)
            .json({ status: 500, error: 'Internal Server erorr: ' + err });
    }
    // exception desconocida
    return res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
};

export default errorHandler;