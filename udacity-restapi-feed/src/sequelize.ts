import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

const c = config;

// Instantiate new Sequelize instance!

  export const sequelize = new Sequelize({
  
    "username": c.username,
    "password": c.password ,     
    "database": c.database,
    "host":  c.host,
  
    dialect: 'postgres',
     
    storage: ':memory:', 
  });

  sequelize.authenticate().then(() => {
    console.log("Successful login to sequilize!");
  }).catch((err) => {
    console.log(err);
  });





