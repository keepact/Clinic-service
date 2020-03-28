import ScheduleRepository from '../repositories/Schedule';

class ScheduleController {
  async store(req, res) {
    const form = req.body;

    const result = await new ScheduleRepository().create(form);

    return res.status(result ? 201 : 400).json(result);
  }
}
export default new ScheduleController();
