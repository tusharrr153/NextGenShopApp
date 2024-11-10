import express from 'express';
import { login, profile, register, users } from '../Controllers/user.js';
import { Authenticated } from '../Middlewares/auth.js';
const router = express.Router();

//register user
router.post('/register', register)  //this is now become /api/user/register

//login route
router.post('/login', login)  //this is now become /api/user/login

//alluser route
router.get('/all', users)

//get user profile
router.get('/profile',Authenticated, profile)

export default router