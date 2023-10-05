import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const Order = db.define('tbl_order',{
    namaPenerima : DataTypes.STRING,
    alamatPengirim : DataTypes.STRING,
    nomerTelpon : DataTypes.STRING,
    jenisLayanan : DataTypes.STRING,
    namaKurir : DataTypes.STRING,
    nomerTelponKurir : DataTypes.STRING
},{
    freezeTableName : true
});

export default Order;

(async()=>{
    await db.sync();
})();