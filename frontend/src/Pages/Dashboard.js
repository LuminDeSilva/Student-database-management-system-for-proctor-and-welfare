import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import universitylogo from '../assets/universitylogo.png';
import axios from 'axios';
import CountUp from 'react-countup';

const Dashboard = () => {
    const navigate = useNavigate();

    const [showLogout, setShowLogout] = useState(false);
    const [facultyCount, setFacultyCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [nonAcademicStaffCount, setNonAcademicStaffCount] = useState(0);
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/unidata/');
            if (response.data.length > 0) {
                const { faculties, academicstaff, students, nonacademicstaff } = response.data[0];
                setFacultyCount(faculties);
                setStaffCount(academicstaff);
                setNonAcademicStaffCount(nonacademicstaff);
                setStudentCount(students);
            } else {
                console.error('Empty response received');
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };
    

    const handleLogout = () => {
        navigate('/');
    };

    const handleButtonClick = (page) => {
        navigate(`/${page}`);
    };

    const gotoStudentData = () => {
        navigate('/DetailStudent');
    };

    const gotoStudentRequest = () => {
        navigate('/StudentRequest');
    };

    const gotoRegister = () => {
        navigate('/StudentData');
    };

    const gotoUpdate = () => {
        navigate('/UpdateStudentData');
    };

    return (
        <>
            <div className='main'>
                <div className="unilogo">
                    <img src={universitylogo} alt="University Logo" />
                </div>
                <div className='uniname'>
                    <div>University of Vavuniya </div>
                    <div className='sri'>Sri Lanka</div>
                </div>
            </div>
            <div className="header">
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="dashboard-info">
                <div className="stat-item"><div className="CountUp"><CountUp end={facultyCount} duration={2.75} /></div><br/>Faculties</div>
                <div className="stat-item"><div className="CountUp"><CountUp end={staffCount} duration={2.75} /></div><br/>Staff Members</div>
                <div className="stat-item"><div className="CountUp"><CountUp end={nonAcademicStaffCount} duration={2.75} /></div><br/>Non academic staff</div>
                <div className="stat-item"><div className="CountUp"><CountUp end={studentCount} duration={3.25} /></div><br/>Students</div>
            </div>
            <div className="buttons">
                <button onClick={gotoRegister}>Register</button>
                <button onClick={gotoStudentData}>Display</button>
                <button onClick={gotoStudentRequest}>Student Request</button>
                <button onClick={gotoUpdate}>Update student</button>
            </div>
        </>
    );
};

export default Dashboard;
