import ClinicRepository from '../repositories/Clinic';

class ClinicController {
  async findSpecialtie(req, res) {
    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getSpecialties();

    return res.status(result ? 200 : 500).json(result);
  }

  async findProfessional(req, res) {
    const { id } = req.query;

    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getProfessional(id);

    return res.status(result ? 200 : 500).json(result);
  }

  async findSource(req, res) {
    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getListSource();

    return res.status(result ? 200 : 500).json(result);
  }
}
export default new ClinicController();
