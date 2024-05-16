import React, { useState, useEffect } from 'react';
import universitylogo from '../assets/universitylogo.png';
import axios from 'axios';

const UpdateStudentData = () => {
    const [searchRegistrationNumber, setSearchRegistrationNumber] = useState('');
    const [student, setStudent] = useState({
        name: '',
        registrationNumber: '',
        course: '',
        faculty: '',
        yearofStudy: '',
        dob: '',
        email: '',
        phone: '',
        nic: '',
        address: '',
        image: ''
    });
    const [errors, setErrors] = useState({});

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/students/${searchRegistrationNumber}`);
            setStudent(response.data);
            setErrors({});
        } catch (error) {
            console.error('Error fetching student details:', error);
            setStudent({
                name: '',
                registrationNumber: '',
                course: '',
                faculty: '',
                yearofStudy: '',
                dob: '',
                email: '',
                phone: '',
                nic: '',
                address: '',
                image: ''
            });
            setErrors({ registrationNumber: 'Student not found' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/students/${student.registrationNumber}`, student);
            alert('Student data updated successfully.');
            setErrors({});
        } catch (error) {
            console.error('Error updating student details:', error);
            setErrors({ registrationNumber: 'Failed to update student data' });
        }
    };

    return (
        <>
            <div className="main">
                <div className="unilogo">
                    <img src={universitylogo} alt="University Logo" />
                </div>
                <div className='uniname'>
                    <div style={{ fontWeight: 'bold' }}>University of Vavuniya </div>
                    <div className='sri'>Sri Lanka</div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='container2'>
                    <div className="inp">
                        <label className='uni'>Search Registration Number:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={searchRegistrationNumber}
                            onChange={(e) => setSearchRegistrationNumber(e.target.value)}
                        />
                        <button type="button" className="btn" onClick={handleSearch}>Search</button>
                    </div>
                    <div style={{ color: 'red', fontSize: '12px', textAlign: 'center' }}>{errors.registrationNumber}</div>
                    <div className="inp">
                        <label className='uni'>Registration Number:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.registrationNumber}
                            readOnly
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Full Name:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.name}
                            onChange={(e) => setStudent({ ...student, name: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Date of Birth:</label>
                        <input
                            type="date"
                            className="inp2"
                            value={student.dob}
                            onChange={(e) => setStudent({ ...student, dob: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Phone Number:</label>
                        <input
                            type="tel"
                            className="inp2"
                            value={student.phone}
                            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Address:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.address}
                            onChange={(e) => setStudent({ ...student, address: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>NIC:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.nic}
                            onChange={(e) => setStudent({ ...student, nic: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Email:</label>
                        <input
                            type="email"
                            className="inp2"
                            value={student.email}
                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Gender:</label>
                        <select
                            className="inp2"
                            value={student.gender}
                            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="inp">
                        <label className='uni'>Course:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.course}
                            onChange={(e) => setStudent({ ...student, course: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Faculty:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.faculty}
                            onChange={(e) => setStudent({ ...student, faculty: e.target.value })}
                        />
                    </div>
                    <div className="inp">
                        <label className='uni'>Year of Study:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.yearofStudy}
                            onChange={(e) => setStudent({ ...student, yearofStudy: e.target.value })}
                        />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn">Update</button>
                        <button onClick={() => window.location.href = '/dashboard'} className="btn">Back</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default UpdateStudentData;
