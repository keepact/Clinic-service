import * as Yup from 'yup';
import Schedule from '../models/Schedule';

export const createSchedule = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      specialty_id: Yup.number()
        .required(),
      professional_id: Yup.number().required(),
      source_id: Yup.number().required(),
      cpf: Yup.string().required(),
      birthdate: Yup.date().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    const scheduleExists = await Schedule.findOne({
      where: { name: req.body.name, birthdate: req.body.birthdate },
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
