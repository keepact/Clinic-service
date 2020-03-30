import { Router } from 'express';

import ScheduleController from './app/controllers/Schedule';
import ClinicController from './app/controllers/Clinic';

import createSchedule from './app/middlewares/Schedule';

const routes = new Router();

routes.post('/schedules', createSchedule, ScheduleController.store);

routes.get('/specialties', ClinicController.findSpecialtie);
routes.get('/professionals', ClinicController.findProfessional);
routes.get('/source', ClinicController.findSource);

export default routes;
