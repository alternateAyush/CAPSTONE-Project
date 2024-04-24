import express from 'express';
import { createReviewFormat,getReviewFormat } from '../controllers/reviewFormat.js';

const router = express.Router();

router.post('/format/',createReviewFormat);
router.get('/format/',getReviewFormat);

export default router;