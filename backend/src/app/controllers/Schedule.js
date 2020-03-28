import ScheduleRepository from '../repositories/Schedule';

class ScheduleController {
  async store(req, res) {
    const form = req.body;

    const scheduleRepository = new ScheduleRepository();

    const result = await scheduleRepository.create(form);

    return res.status(result ? 201 : 400).json(result);
  }
}
export default new ScheduleController();
