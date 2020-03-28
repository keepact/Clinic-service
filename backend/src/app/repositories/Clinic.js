import api from '../services/api';

class ClinicRepository {
  constructor() {
    this.authorization = process.env.API_SECRET;
  }

  async getSpecialties() {
    try {
      api.defaults.headers.common['x-access-token'] = this.authorization;

      const response = await api.get('specialties/list');

      return response.data;
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }

  async getProfessional() {
    try {
      api.defaults.headers.common['x-access-token'] = this.authorization;

      const response = await api.get('professional/list');

      return response.data;
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }

  async getListSource() {
    try {
      api.defaults.headers.common['x-access-token'] = this.authorization;

      const response = await api.get('patient/list-sources');

      return response.data;
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }
}

export default ClinicRepository;
