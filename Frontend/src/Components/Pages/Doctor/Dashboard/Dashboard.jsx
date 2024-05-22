import React, { useState } from 'react';
import './Dashboard.css';
import AppointmentList from '../Appoinments/AppointmentList';
import PatientList from '../Patients/Patient';
import MedicalRecords from '../MedicalRecords/MedicalRecords';
import Prescription from '../Prescriptions/Prescription';
import Calendar from '../Calendar/Calendar';
import Settings from '../Settings/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='DoctorDashboard'>
      <div className='DoctorDashboardNavbar'>
        <div className='DoctorDashboardNavbarLogo'>
          <h3>PORTAL</h3>
        </div>
        <div className='DoctorDashboardNavbarFree'>
          
        </div>
        <div className='DoctorDashboardNavbarButton'>
          <div className=''>
            <button>Doctor</button>
          </div>
          <div>
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className='DoctorDashboardContent'>
        <div className='DoctorDashboardSideBar'>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('appointments')}>Appointments</a>
          </div>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('patients')}>Patients</a>
          </div>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('medicalRecords')}>Medical Records</a>
          </div>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('prescriptions')}>Prescriptions</a>
          </div>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('calendar')}>Calendar</a>
          </div>
          <div className='DoctorDashboardSideBarTab'>
            <a onClick={() => handleTabChange('settings')}>Settings</a>
          </div>
        </div>

        <div className='DoctorDashboardActivePage'>
          {activeTab === 'appointments' && <AppointmentList />}
          {activeTab === 'patients' && <PatientList />}
          {activeTab === 'medicalRecords' && <MedicalRecords />}
          {activeTab === 'prescriptions' && <Prescription />}
          {activeTab === 'calendar' && <Calendar />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
