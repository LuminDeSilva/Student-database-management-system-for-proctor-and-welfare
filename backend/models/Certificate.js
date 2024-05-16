const mongoose = require('mongoose');

const CertificateRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  certificateType: {
    type: String,
    enum: ['certificate', 'transcription'], 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('CertificateRequest', CertificateRequestSchema);
