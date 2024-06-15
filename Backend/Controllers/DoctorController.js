import Doctor from '../Models/Doctor_Model.js';
import cloudinary from '../Configure/CloudinaryConfig.js';
import { Readable } from 'stream';

export const createDoctor = async (req, res) => {
  try {
    const {name, email, password, specialization, licenseNumber } = req.body;

    // Upload the image to Cloudinary
    let imgUrl;
    if (req.file) {
      const { originalname: imageName, buffer: imageBuffer } = req.file;

      try {
        const cloudinaryUploadResult = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'doctor_propic', public_id: imageName },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          );
    
          const imageStream = new Readable();
          imageStream.push(imageBuffer);
          imageStream.push(null);
    
          imageStream.pipe(uploadStream);
        });
    
        imgUrl = cloudinaryUploadResult.secure_url;

      }catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(400).send({ success: false, message: 'Error uploading image.' });
      }
    };

    // Find the maximum id in user table
    const resultDoctor = await Doctor.findOne({}, {}, { sort: { doctor_id: -1 } });
    
    let doctor_id;
    if (resultDoctor && resultDoctor.doctor_id) {
      const maxDoctorId = resultDoctor.doctor_id;
      doctor_id = parseInt(maxDoctorId) + 1;
    } else {
      doctor_id = 1;
    }

    // Create a new user
    const newDoctor = await Doctor.create({ doctor_id, name, email, password, specialization, licenseNumber, imgUrl, status: 'ACTIVE'});
    res.status(201).send({ success: true, message: 'Doctor created successfully.', newDoctor });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({ success: false, message: 'Error creating Doctor.' });
  }
};

export const fetchDoctor = async (req, res) => {
    try {
      const {email, password } = req.body;

      const doctor = await Doctor.findOne({email: email});
      if (!doctor || doctor.status == 'INACTIVE') {
        return res.status(404).send('User not found');
      }
      else if (password == doctor.password) {
        res.status(200).json({ success: true, doctor });
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

export const fetchDoctors = async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.status(201).send(doctors);
    } catch (error) {
      res.status(500).send(error);
    }
  }

export const updateDoctor = async (req, res) => {
    const {name, email, password, specialization, licenseNumber } = req.body;
    try {
        const doctor_before_update = await Doctor.findOne({email: email});
        if (!doctor_before_update) {
          return res.status(404).send('User not found');
        }

        await Doctor.findOneAndUpdate({email: email}, req.body, { new: true, runValidators: true });
        const doctor = await Doctor.findOne({email: email})

        res.json({ success: true, doctor });

        } catch (error) {
            res.status(500).send(error);
        }
  }

export const softDeleteDoctor = async (req, res) => {
  const id = req.params.id;
    try {
      const updatedDoctor = await Doctor.findOneAndUpdate(
        { doctor_id: id },
        { $set: { status: 'INACTIVE' } },
        { new: true }
      );
      if (!updatedDoctor) {
        return res.status(404).send('User not found');
      }
      res.json({ success: true, message: "Successfully Deleted", updatedDoctor });
    } catch (error) {
      res.status(500).send(error);
    }
  }

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedUser = await Doctor.findOneAndDelete({doctor_id: id});
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
      res.send('Successfully deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
