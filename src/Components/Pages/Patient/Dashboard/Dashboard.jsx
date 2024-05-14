import React, { useState } from 'react';
import './Dashboard.css';

const PatientDashboard = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='patientDashboard'>
            {/* Navigation bar of the Patient Dashboard*/}
            <div className="patientDashboardNavbar">
                <div className="patientNavbarLogo">
                    <h3>PORTAL</h3>
                </div>
            </div>

            <div className="patientDashboardContent">
                {/* Side Bar of the Patient Dashboard*/}
                <div className="patientDashboardSidebar">
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('home')}>Home</a>
                    </div>
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('appointments')}>My Appointments</a>
                    </div>
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('refundRequests')}>Refund Request</a>
                    </div>
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('healthTips')}>Health Tips</a>
                    </div>
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('aboutUs')}>About Us</a>
                    </div>
                    <div className="patientDashboardSidebarTab">
                        <a onClick={() => handleTabChange('contactUs')}>Contact Us</a>
                    </div>
                </div>

                {/* Main Page of the Patient Dashboard*/}
                <div className="patientDashboardMain">
                    {activeTab === 'home' && (
                        <div className="home">
                            <div className="bgImg">
                                <img src="../src/Components/Assests/Images/bg2.jpg" alt="" />
                                <div className="welcomeMessage">
                                    <h1>Hello, Welcome</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'appointments' && (
                        <div className="appointments">
                            <h2>My Appointments</h2>
                        </div>
                    )}

                    {activeTab === 'refundRequests' && (
                        <div className="refundRequests">
                            <h2>Refund Requests</h2>
                        </div>
                    )}

                    {activeTab === 'healthTips' && (
                        <div className="healthTips">
                            <h2>Health Tips</h2>
                        </div>
                    )}

                    {activeTab === 'aboutUs' && (
                        <div className="aboutUs">
                            <h2>About Us</h2>
                        </div>
                    )}

                    {activeTab === 'contactUs' && (
                        <div className="contactUs">
                            <h2>Contact Us</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
