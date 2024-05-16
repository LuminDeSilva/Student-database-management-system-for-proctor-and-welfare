const express = require("express");
const router = express.Router();

const CertificateRequest = require('../../models/Certificate');

router.get('/test', (req, res) => res.send('Certificate route is testing'));

router.get('/', async (req, res) => {
    const certificateRequests = await CertificateRequest.find();
    res.json(certificateRequests);
});

router.get('/:id', async (req, res) => {
    const certificateRequest = await CertificateRequest.findById(req.params.id);
    if (!certificateRequest) {
        return res.status(404).json({ error: 'Certificate request not found' });
    }
    res.json(certificateRequest);
});

router.post('/', async (req, res) => {
    const newCertificateRequest = new CertificateRequest(req.body);
    await newCertificateRequest.save();
    res.json(newCertificateRequest);
});

router.delete('/:id', async (req, res) => {
    const certificateRequest = await CertificateRequest.findById(req.params.id);
    if (!certificateRequest) {
        return res.status(404).json({ error: 'Certificate request not found' });
    }
    await CertificateRequest.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Certificate request deleted' });
});

module.exports = router;
