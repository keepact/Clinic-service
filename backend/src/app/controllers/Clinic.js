import ClinicRepository from '../repositories/Clinic';

class ClinicController {
  async findSpecialtie(req, res) {
    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getSpecialties();

    return res.status(result ? 201 : 400).json(result);
  }

  async findProfessional(req, res) {
    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getProfessional();

    return res.status(result ? 201 : 400).json(result);
  }

  async findSource(req, res) {
    const clinicRepository = new ClinicRepository();

    const result = await clinicRepository.getListSource();

    return res.status(result ? 201 : 400).json(result);
  }
}
export default new ClinicController();
