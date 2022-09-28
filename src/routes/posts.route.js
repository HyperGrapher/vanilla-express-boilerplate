import { Router } from "express";
const router = Router();
import auth from '../middleware/auth.middleware';

//localhost:3000/api/
router.get("/", auth, (req, res, next) => {
    
    res.send('HELLO KITTY! SECURED BY JWT');

});


export default router
