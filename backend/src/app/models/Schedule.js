import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        specialty_id: Sequelize.INTEGER,
        professional_id: Sequelize.INTEGER,
        source_id: Sequelize.INTEGER,
        cpf: Sequelize.INTEGER,
        birthdate: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );
  }
}

export default Schedule;
