import Schedule from '../models/Schedule';

class ScheduleRepository {
  async create(reqBody) {
    try {
      return await Schedule.create(reqBody);
    } catch (err) {
      console.error(
        `Não foi possível criar o cadastro do aluno: ${JSON.stringify(err)}`
      );
    }
    return undefined;
  }
}

export default ScheduleRepository;
