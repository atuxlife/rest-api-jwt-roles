import app from './app';
import './database';

import dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.SV_PORT || 3000);
console.log('Server listen on port ', process.env.SV_PORT || 3000);