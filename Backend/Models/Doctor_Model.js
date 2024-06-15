import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    doctor_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
  });

const Doctors = mongoose.model('Doctors', DoctorSchema);

export default Doctors;