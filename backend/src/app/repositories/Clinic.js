import api from '../services/api';

class ClinicRepository {
  constructor() {
    this.authorization = process.env.API_SECRET;
    this.type = 'application/json';
  }

  async getSpecialties() {
    try {
      Object.assign(api.defaults, {
        headers: {
          'Content-Type': this.type,
          'x-access-token': this.authorization,
        },
      });

      const response = await api.get('specialties/list');

      return response.data;
    } catch (err) {
      console.error(
        `Não foi possível acessar as especialidades dos médicos: ${JSON.stringify(
          err,
        )}`,
      );
    }
    return undefined;
  }

  async getProfessional(id) {
    try {
      Object.assign(api.defaults, {
        headers: {
          'Content-Type': this.type,
          'x-access-token': this.authorization,
        },
      });

      const response = await api.request({
        url: 'professional/list',
        method: 'GET',
        data: {
          especialidade_id: id,
        },
      });

      return response.data;
    } catch (err) {
      console.error(
        `Não foi possível acessar a lista de profissionais: ${JSON.stringify(
          err,
        )}`,
      );
    }
    return undefined;
  }

  async getListSource() {
    try {
      Object.assign(api.defaults, {
        headers: {
          'Content-Type': this.type,
          'x-access-token': this.authorization,
        },
      });

      const response = await api.get('patient/list-sources');

      return response.data;
    } catch (err) {
      console.error(
        `Não foi possível acessar as formas de indicação: ${JSON.stringify(
          err,
        )}`,
      );
    }
    return undefined;
  }
}

export default ClinicRepository;
