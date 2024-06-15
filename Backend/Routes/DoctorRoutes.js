import express from 'express';
import multer from 'multer';
const router = express.Router();

import * as doctorController from '../Controllers/DoctorController.js'; 

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/createDoctor', upload.single('userProPic'), doctorController.createDoctor);
router.get('/fetchDoctors', doctorController.fetchDoctors);
router.post('/fetchDoctor', doctorController.fetchDoctor);
router.patch('/updateDoctor', doctorController.updateDoctor);
router.patch('/softDeleteDoctor/:id', doctorController.softDeleteDoctor);
router.delete('/deleteDoctor/:id', doctorController.deleteDoctor);

export default router;