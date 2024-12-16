

import { Router } from 'express';
import { testTools,migrationTools } from './controller';

const commonRouter = Router();

commonRouter.post('/test',testTools);
commonRouter.post('/migration',migrationTools);

export default commonRouter;



