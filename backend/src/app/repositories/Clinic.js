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
      console.error(
        `Não foi possível acessar as especialidades dos médicos: ${JSON.stringify(err)}`
      );
    }
    return undefined;
  }

  async getProfessional() {
    try {
      api.defaults.headers.common['x-access-token'] = this.authorization;

      const response = await api.get('professional/list');

      return response.data;
    } catch (err) {
      console.error(
        `Não foi possível acessar a lista de profissionais: ${JSON.stringify(err)}`
      );
    }
    return undefined;
  }

  async getListSource() {
    try {
      api.defaults.headers.common['x-access-token'] = this.authorization;

      const response = await api.get('patient/list-sources');

      return response.data;
    } catch (err) {
      console.error(
        `Não foi possível acessar as formas de indicação: ${JSON.stringify(err)}`
      );
    }
    return undefined;
  }
}

export default ClinicRepository;
