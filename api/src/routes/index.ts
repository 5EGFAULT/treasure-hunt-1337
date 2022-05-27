import * as express from 'express';
import { verifyToken, verifyTokenAdmin } from '../config/jwt';
import * as AdminController from '../controllers/AdminController';
import * as AuthController from '../controllers/AuthController';
import * as FlagController from '../controllers/FlagController';
import * as TeamController from '../controllers/TeamController';
import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
	},

})
const upload = multer({
	storage: storage,
	fileFilter: function (req, file, callback) {
		var ext = path.extname(file.originalname);
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
			return callback(new Error('Only images are allowed'))
		}
		callback(null, true)
	}
});
const router = express.Router();
//! Auth routes
router.post("/login", AuthController.login);
router.post("/verify", verifyToken, AuthController.verify);
router.post("/logout", AuthController.logout);
//! Team routes
//router.get("/leaderboard", TeamController.leaderboard);
router.get("/team", TeamController.get);
router.get("/team/us", verifyToken, TeamController.us);
router.post("/pic", verifyToken, upload.single('picture'), TeamController.pic);
router.use("/pics/", express.static('uploads'));
//! Flag routes
router.get("/flag", FlagController.get);
router.post("/submit", verifyToken, FlagController.submit);
//! admin routes
router.post("/admin/verify", verifyTokenAdmin, AdminController.verify);
router.post("/admin/team", verifyTokenAdmin, AdminController.team);
router.post("/admin/flag", verifyTokenAdmin, AdminController.flag);

export default router;