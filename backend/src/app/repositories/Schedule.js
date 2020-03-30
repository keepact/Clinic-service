import Schedule from '../models/Schedule';

class ScheduleRepository {
  async create(reqBody) {
    try {
      return await Schedule.create(reqBody);
    } catch (err) {
      console.error(
        `Não foi possível realizar o agendamento: ${JSON.stringify(err)}`
      );
    }
    return undefined;
  }
}

export default ScheduleRepository;
