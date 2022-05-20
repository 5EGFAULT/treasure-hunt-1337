import { Router, Request, Response } from 'express';
import { verifyToken, verifyTokenAdmin } from '../config/jwt';
import * as AdminController from '../controllers/AdminController';
import * as AuthController from '../controllers/AuthController';
import * as FlagController from '../controllers/FlagController';
import * as TeamController from '../controllers/TeamController';

const router = Router();
router.post("/login", AuthController.logout);
router.post("/verify", verifyToken, AuthController.verify);
router.post("/logout", AuthController.logout);
router.get("/leaderboard", TeamController.leaderboard);
router.get("/team", TeamController.get);
router.get("/flag", FlagController.get);
router.post("/submit", verifyToken, FlagController.submit);
router.post("/admin/team", verifyTokenAdmin, AdminController.team);
router.post("/admin/flag", verifyTokenAdmin, AdminController.flag);

export default router;