import * as Yup from 'yup';
import Schedule from '../models/Schedule';

const createSchedule = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      date_time: Yup.date().required(),
      specialties: Yup.array().required(),
      professional_id: Yup.number().required(),
      source_id: Yup.number().required(),
      cpf: Yup.string().required(),
      birthdate: Yup.date().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    const scheduleExists = await Schedule.findOne({
      where: {
        name: req.body.name,
        professional_id: req.body.professional_id,
        date_time: req.body.date_time,
      },
    });

    if (scheduleExists) {
      return res.status(400).json({ error: 'O agendamento já existe' });
    }

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ err: 'A validação falhou', messsages: err.inner });
  }
};

export default createSchedule;
