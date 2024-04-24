import express from 'express';
import { createIssue,getAllIssues } from '../controllers/issues.js';

const router = express.Router();

router.post('/',createIssue);
router.get('/',getAllIssues);

export default router;