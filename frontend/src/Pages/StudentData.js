import React, { useState } from 'react';

const StudentData = () => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [faculty, setFaculty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Registration Number:
                <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                />
            </label>
            <br />
            <label>
                Full Name:
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Date of Birth:
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </label>
            <br />
            <label>
                Phone Number:
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </label>
            <br />
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <br />
            <label>
                Street:
                <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </label>
            <br />
            <label>
                City:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Gender:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Course:
                <input
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
            </label>
            <br />
            <label>
                Faculty:
                <input
                    type="text"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                />
            </label>
            <label>
                Profile Picture:
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const imageUrl = event.target.result;
                            // Do something with the image URL, such as displaying it in a small box
                            const displayImage = (imageUrl) => {
                                // Create a new image element
                                const image = new Image();
                                image.src = imageUrl;
                                image.width = 8;
                                image.height = 8;

                                // Append the image element to a container element
                                const container = document.getElementById('image-container');
                                container.innerHTML = '';
                                container.appendChild(image);
                            };

                            // Call the displayImage function with the imageUrl
                            displayImage(imageUrl);
                            // For example, you can set it to a state variable and render it in an <img> element
                        };
                        reader.readAsDataURL(file);
                    }}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button onClick={() => window.location.href = '/dashboard'}>Back</button>
        </form>
    );
};

export default StudentData;