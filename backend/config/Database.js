import { Sequelize } from "sequelize";

const db = new Sequelize('sijeni_db','root','',{
    host : 'localhost',
    dialect : 'mysql'
});

export default db;