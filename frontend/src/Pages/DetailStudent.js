import React, { useState } from 'react';

const DetailStudent = () => {
    const [student, setStudent] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        // TODO: Fetch student data from the database based on the searchValue
        // You can use an API call or any other method to retrieve the data

        // Example data
        const studentData = {
            name: 'John Doe',
            registrationNumber: '123456',
            dateOfBirth: '1990-01-01',
            address: '123 Main St, City',
            gender: 'Male',
            course: 'Computer Science',
            image: 'https://example.com/student.jpg',
        };

        setStudent(studentData);
    };

    return (
        <div>
            <h1>Student Details</h1>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter registration number"
            />
            <button onClick={handleSearch}>Search</button>

            {student && (
                <div>
                    <h2>{student.name}</h2>
                    <p>Registration Number: {student.registrationNumber}</p>
                    <p>Date of Birth: {student.dateOfBirth}</p>
                    <p>Address: {student.address}</p>
                    <p>Gender: {student.gender}</p>
                    <p>Course: {student.course}</p>
                    <img src={student.image} alt="Student" />
                </div>
            )}
            <button onClick={() => window.location.href = '/dashboard'}>Back to Dashboard</button>
        </div>
    );
};

export default DetailStudent;