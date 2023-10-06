import { Sequelize } from "sequelize";

const db = new Sequelize('railway','root','djfVvPGOIEjsprPGvUlt',{
    port : '6121',
    host : 'containers-us-west-148.railway.app',
    dialect : 'mysql'
});

export default db;