import { Router, Request, Response } from 'express';


const router = Router();

router.post("/login", (req: Request, res: Response) => {
	res.json({});
});
router.post("/logout", (req: Request, res: Response) => {
	res.json({});
});
router.get("/leaderboard", (req: Request, res: Response) => {
	res.json({});
});
router.get("/team", (req: Request, res: Response) => {
	res.json({});
});
router.get("/flag", (req: Request, res: Response) => {
	res.json({});
});
router.post("/submit", (req: Request, res: Response) => {
	res.json({});
});
router.post("/admin/team", (req: Request, res: Response) => {
	res.json({});
});
router.post("/admin/flag", (req: Request, res: Response) => {
	res.json({});
});

export default router;