import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './config/inversify.config'

import "@api/controllers";

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();

export { app } 