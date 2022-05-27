import { Router } from 'express';
import { verifyToken, verifyTokenAdmin } from '../config/jwt';
import * as AdminController from '../controllers/AdminController';
import * as AuthController from '../controllers/AuthController';
import * as FlagController from '../controllers/FlagController';
import * as TeamController from '../controllers/TeamController';

const router = Router();
//! Auth routes
router.post("/login", AuthController.login);
router.post("/verify", verifyToken, AuthController.verify);
router.post("/logout", AuthController.logout);
//! Team routes
router.get("/leaderboard", TeamController.leaderboard);
router.get("/team", TeamController.get);
//! Flag routes
router.get("/flag", FlagController.get);
router.post("/submit", verifyToken, FlagController.submit);
//! admin routes
router.post("/admin/verify", verifyTokenAdmin, AdminController.verify);
router.post("/admin/team", verifyTokenAdmin, AdminController.team);
router.post("/admin/flag", verifyTokenAdmin, AdminController.flag);

export default router;