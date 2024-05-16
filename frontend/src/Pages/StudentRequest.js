import React, { useState, useEffect } from 'react';
import universitylogo from '../assets/universitylogo.png';
import axios from 'axios';

function CertificateList() {
  const [certificateRequests, setCertificateRequests] = useState([]);

  useEffect(() => {
    const fetchCertificateRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/certificate/');
        setCertificateRequests(response.data);
      } catch (error) {
        console.error('Error fetching certificate requests:', error);
      }
    };

    fetchCertificateRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/certificate/${id}`);
      setCertificateRequests(certificateRequests.filter((request) => request._id !== id));
    } catch (error) {
      console.error('Error deleting certificate request:', error);
    }
  };

  return (
    <div className="main">
      <div className="unilogo">
        <img src={universitylogo} alt="University Logo" />
      </div>
      <div className="uniname">
        <div>University of Vavuniya</div>
        <div className="sri">Sri Lanka</div>
      </div>
      <div className="certificate-requests">
        <h2>Certificate Requests</h2>
        <table className="certificate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Phone Number</th>
              <th>Certificate Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {certificateRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.name}</td>
                <td>{request.registrationNumber}</td>
                <td>{request.email}</td>
                <td>{request.reason}</td>
                <td>{request.phoneNumber}</td>
                <td>{request.certificateType}</td>
                <td>
                  <button onClick={() => handleDelete(request._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button">
        <button onClick={() => window.location.href = '/dashboard'} className="btn">Back</button>
      </div>
    </div>
  );
}

export default CertificateList;
