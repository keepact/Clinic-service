import Sequelize from 'sequelize';

import Schedule from '../app/models/Schedule';

import databaseConfig from '../config/database';

const models = [Schedule];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
