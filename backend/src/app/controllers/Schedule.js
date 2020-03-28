import Schedule from '../models/Schedule';

class ScheduleController {
  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    return res.json(schedule);
  }
}

export default new ScheduleController();
