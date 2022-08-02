require('dotenv').config();
//Libraries
import express from 'express';

//dependencies
import cors from 'cors';
import helmet from 'helmet';

//DB connection
import connectDB from './database/connection';
const zomato = express();

//Middleware
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//server work
zomato.get('/', (req, res) => {
  res.json({
    message: 'Setup Sucess',
  });
});
const port = 4000;
zomato.listen(port, () => {
  connectDB()
    .then(() => console.log('Server is running✨✨'))
    .catch((err) => console.log('Error'));
});
