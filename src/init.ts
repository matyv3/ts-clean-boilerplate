import 'reflect-metadata'
import 'module-alias/register';
import logger from '@config/logger';
import { app } from './app'

const PORT = 3000;

const start = async () => {
    try {
        /**
         * ------------------------------
         *  Attempt connect database here
         * ------------------------------
         */
        // logger.info('Posts service connected to database...')
    } catch (err) {
        logger.error(err)
    }

    app.listen(PORT, () => logger.info(`Posts service running on port ${PORT}...`))
}


start()