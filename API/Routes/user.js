import express from 'express';
import { login, register, users } from '../Controllers/user.js';

const router = express.Router();

//register user
router.post('/register', register)  //this is now become /api/user/register

//login route
router.post('/login', login)  //this is now become /api/user/login

//alluser route
router.get('/all', users)

export default router