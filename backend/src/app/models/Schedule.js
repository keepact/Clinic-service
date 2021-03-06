import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        specialties: Sequelize.ARRAY(Sequelize.INTEGER),
        professional_id: Sequelize.INTEGER,
        source_id: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
        birthdate: Sequelize.DATE,
        date_time: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );
  }
}

export default Schedule;
