import React, { useState } from 'react';
import universitylogo from '../assets/universitylogo.png';
import axios from 'axios';

const StudentData = () => {
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
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(student);
        if (Object.keys(formErrors).length === 0) {
            axios.post('http://localhost:8080/api/students/', student)
                .then((res) => {
                    console.log(res.data);
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
                    setSuccessMessage('Student data saved successfully.');
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 3000);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = (formData) => {
        const errors = {};
        const regNumberPattern = /^[0-9]{4}[A-Z]{3}[0-9]{2}$/;
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                errors[key] = 'This field is required.';
            } else if (key === 'registrationNumber' && !regNumberPattern.test(formData[key])) {
                errors[key] = 'Invalid format. Please enter in the format: 2010ICT01';
            }
        });
        return errors;
    };

    return (
        <>
            <div className="main">
                <div className="unilogo">
                    <img src={universitylogo} alt="University Logo" />
                </div>
                <div className='uniname'>
                    <div >University of Vavuniya </div>
                    <div className='sri'>Sri Lanka</div>   
                </div>
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className='container2'>
                    {/* Input fields */}
                    {/* Registration Number */}
                    <div className="inp">
                        <label className='uni'>Registration Number:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.registrationNumber}
                            onChange={(e) => setStudent({ ...student, registrationNumber: e.target.value })}
                        />
                        {errors.registrationNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.registrationNumber}</span>}
                    </div>
                    {/* Full Name */}
                    <div className="inp">
                        <label className='uni'>Full Name:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.name}
                            onChange={(e) => setStudent({ ...student, name: e.target.value })}
                        />
                        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                    </div>
                    {/* Date of Birth */}
                    <div className="inp">
                        <label className='uni'>Date of Birth:</label>
                        <input
                            type="date"
                            className="inp2"
                            value={student.dob}
                            onChange={(e) => setStudent({ ...student, dob: e.target.value })}
                        />
                        {errors.dob && <span style={{ color: 'red', fontSize: '12px' }}>{errors.dob}</span>}
                    </div>
                    {/* Phone Number */}
                    <div className="inp">
                        <label className='uni'>Phone Number:</label>
                        <input
                            type="tel"
                            className="inp2"
                            value={student.phone}
                            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                        />
                        {errors.phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</span>}
                    </div>
                    {/* Address */}
                    <div className="inp">
                        <label className='uni'>Address:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.address}
                            onChange={(e) => setStudent({ ...student, address: e.target.value })}
                        />
                        {errors.address && <span style={{ color: 'red', fontSize: '12px' }}>{errors.address}</span>}
                    </div>
                    
                    {/* NIC */}
                    <div className="inp">
                        <label className='uni'>NIC:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.nic}
                            onChange={(e) => setStudent({ ...student, nic: e.target.value })}
                        />
                        {errors.nic && <span style={{ color: 'red', fontSize: '12px' }}>{errors.nic}</span>}
                    </div>
                    {/* Email */}
                    <div className="inp">
                        <label className='uni'>Email:</label>
                        <input
                            type="email"
                            className="inp2"
                            value={student.email}
                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                        />
                        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                    </div>
                    {/* Gender */}
                    <div className="inp">
                        <label className='uni'>Gender:</label>
                        <select
                            value={student.gender}
                            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</span>}
                    </div>
                    {/* Course */}
                    <div className="inp">
                        <label className='uni'>Course:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.course}
                            onChange={(e) => setStudent({ ...student, course: e.target.value })}
                        />
                        {errors.course && <span style={{ color: 'red', fontSize: '12px' }}>{errors.course}</span>}
                    </div>
                    {/* Faculty */}
                    <div className="inp">
                        <label className='uni'>Faculty:</label>
                        <input
                            type="text"
                            className="inp2"
                            value={student.faculty}
                            onChange={(e) => setStudent({ ...student, faculty: e.target.value })}
                        />
                        {errors.faculty && <span style={{ color: 'red', fontSize: '12px' }}>{errors.faculty}</span>}
                    </div>
                    {/* Year of Study */}
                    <div className="inp">
                        <label className='uni'>Year of Study:</label>
                        <div>
                            <input
                                type="radio"
                                id="year1"
                                name="yearOfStudy"
                                value="1"
                                checked={student.yearofStudy === '1'}
                                onChange={(e) => setStudent({ ...student, yearofStudy: e.target.value })}
                            />
                            <label htmlFor="year1">1</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="year2"
                                name="yearOfStudy"
                                value="2"
                                checked={student.yearofStudy === '2'}
                                onChange={(e) => setStudent({ ...student, yearofStudy: e.target.value })}
                            />
                            <label htmlFor="year2">2</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="year3"
                                name="yearOfStudy"
                                value="3"
                                checked={student.yearofStudy === '3'}
                                onChange={(e) => setStudent({ ...student, yearofStudy: e.target.value })}
                            />
                            <label htmlFor="year3">3</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="year4"
                                name="yearOfStudy"
                                value="4"
                                checked={student.yearofStudy === '4'}
                                onChange={(e) => setStudent({ ...student, yearofStudy: e.target.value })}
                            />
                            <label htmlFor="year4">4</label>
                        </div>
                    </div>
                    {/* Submit button */}
                    <div className='button'>
                        <button type="submit" className="btn">Submit</button>
                        <button onClick={() => window.location.href = '/dashboard'} className="btn">Back</button>
                    </div>
                </div>
                {/* Photo container */}
                <div className="photoContainer">
                    <label className='uni2'>Profile Picture:</label>
                    <br />
                    <input
                        type="file"
                        className="inp3"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const imageUrl = event.target.result;
                                setStudent({ ...student, image: imageUrl });
                            };
                            reader.readAsDataURL(file);
                        }}
                    />
                    <br />
                    {/* Display image preview */}
                    {student.image && (
                        <img src={student.image} alt="Student" style={{ width: '100px', height: '100px' }} />
                    )}
                </div>
            </form>
        </>
    );
};

export default StudentData;
