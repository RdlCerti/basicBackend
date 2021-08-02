import { Sequelize } from 'sequelize';

const db = 'desafio';
const user = 'postgres';
const pass = 'root';
const address = 'localhost';
const port = '5432';

// npm install pg pg-hstore sequelize uuid
const sequelize = new Sequelize(`postgres://${user}:${pass}@${address}:${port}/${db}`);
sequelize.authenticate()
  .then(() => { console.log("Successfully connect to PostGres."); })
  .catch(err => { console.error("Connection error", err); process.exit(); });

export default sequelize;

