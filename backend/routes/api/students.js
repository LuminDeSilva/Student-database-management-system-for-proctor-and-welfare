const express=require("express")
const router=express.Router();

const Student=require('../../models/Student');

router.get('/test',(req,res)=>res.send('Student route is testing'));

router.get('/',(req,res)=>{
    Student.find()
    .then(students=>res.json(students))
    .catch(err=>res.status(404).json({noStudentsFound:'No students found'}));
});


router.get('/:registrationNumber',(req,res)=>{
    const registrationNumber = req.params.registrationNumber;
    Student.findOne({ registrationNumber }) 
    .then(student=>{
        if(!student) {
            return res.status(404).json({ noStudentFound: 'No student found with this registration number' });
        }
        res.json(student);
    })
    .catch(err=>res.status(500).json({ error: 'Internal server error' }));
});

router.post('/',(req,res)=>{
    Student.create(req.body)
    .then(student=>res.json({msg:'Student added successfully'}))
    .catch(err=>res.status(400).json({error:'Unable to add this student'}));
});

router.put('/:registrationNumber', (req, res) => {
    const registrationNumber = req.params.registrationNumber;
    const updateData = req.body;

    Student.findOneAndUpdate({ registrationNumber }, updateData, { new: true })
        .then(student => {
            if (!student) {
                return res.status(404).json({ error: 'No student found with this registration number' });
            }
            res.json({ msg: 'Student updated successfully', updatedStudent: student });
        })
        .catch(err => {
            console.error('Error updating student:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
});

router.delete('/:registrationNumber', (req, res) => {
    const registrationNumber = req.params.registrationNumber;
    Student.findOneAndDelete({ registrationNumber })
        .then(student => {
            if (!student) {
                return res.status(404).json({ error: 'No student found with this registration number' });
            }
            res.json({ msg: 'Student entry deleted successfully', deletedStudent: student });
        })
        .catch(err => {
            console.error('Error deleting student:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports=router;