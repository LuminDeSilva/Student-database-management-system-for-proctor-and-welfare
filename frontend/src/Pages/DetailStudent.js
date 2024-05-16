import React, { useState } from 'react';
import universitylogo from '../assets/universitylogo.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';

const DetailStudent = () => {
    const [student, setStudent] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const { id } = useParams();

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/api/students/${searchValue}`)
            .then((res) => {
                setStudent(res.data);
            })
            .catch(err => {
                console.log(err);
                setStudent(null); 
            });     
    };

    const generatePDF = () => {
        if (student) {
            const doc = new jsPDF();
            doc.text(`Student Details`, 10, 10);
            let yPos = 30;
            for (const key in student) {
                if (Object.hasOwnProperty.call(student, key)) {
                    const value = student[key];
                    doc.text(`${key}: ${value}`, 10, yPos);
                    yPos += 10;
                }
            }
            doc.save("student_details.pdf");
        }
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
            <div className="container3">
                <h1>Student Details</h1>
                <div className="container4">
                    <input
                        type="text"
                        className="text1"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Enter registration number"
                    />
                    <button onClick={handleSearch} className="btn2">Search</button>

                    {student && (
                        <div>
                            <h2>{student.name}</h2>
                            <p>Registration Number: {student.registrationNumber}</p>
                            <p>Course: {student.course}</p>
                            <p>Faculty: {student.faculty}</p>
                            <p>Year of Study: {student.yearofStudy}</p>
                            <p>Date of Birth: {student.dob}</p>
                            <p>Email: {student.email}</p>
                            <p>Phone: {student.phone}</p>
                            <p>NIC: {student.nic}</p>
                            <p>Address: {student.address}</p>
                            <img src={student.image} alt="Student" />
                            <br/>
                            <button onClick={generatePDF} className="btn3">Download PDF</button>
                        </div>
                    )}

                    <button onClick={() => window.location.href = '/dashboard'} className="btn3">Back to Dashboard</button>
                </div>  
            </div>
        </>
    );
};

export default DetailStudent;
