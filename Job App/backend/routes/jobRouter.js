import express from 'express';
import { getAllJobs, getMyJobs, postJob } from '../controllers/jobController';

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);

export default router