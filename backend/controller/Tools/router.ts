

import { Router } from 'express';
import { testTools,migrationTools } from './controller';

const toolsRouter = Router();

toolsRouter.post('/test',testTools);
toolsRouter.post('/migration',migrationTools);

export default toolsRouter;



