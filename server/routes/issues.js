import express from 'express';
import { createIssue,getAllIssues,updateIssue, deleteIssue } from '../controllers/issues.js';

const router = express.Router();

router.post('/',createIssue);
router.get('/',getAllIssues);
router.patch('/:id',updateIssue);
router.delete('/:id',deleteIssue);

export default router;