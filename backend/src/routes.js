import { Router } from 'express';

import ScheduleController from './app/controllers/Schedule';

const routes = new Router();

routes.post('/schedules', ScheduleController.store);

export default routes;
