import { Sequelize } from "sequelize";

const db = new Sequelize('museo', 'root', 'Nime._.1324',{
    host:'localhost',
    dialect: 'mysql',
})

export default db;