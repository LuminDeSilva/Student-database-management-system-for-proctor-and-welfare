const express=require("express")
const router=express.Router();

const Student=require('../../models/Student');

router.get('/test',(req,res)=>res.send('Student route is testing'));

router.get('/',(req,res)=>{
    Student.find()
    .then(students=>res.json(students))
    .catch(err=>res.status(404).json({noStudentsFound:'No students found'}));
});

router.get('/:id',(req,res)=>{
    Student.findById(req.params.id)
    .then(student=>res.json(student))
    .catch(err=>res.status(404).json({noStudentFound:'No student found'}));
});

router.post('/',(req,res)=>{
    Student.create(req.body)
    .then(student=>res.json({msg:'Student added successfully'}))
    .catch(err=>res.status(400).json({error:'Unable to add this student'}));
});

router.put('/:id',(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,req.body)
    .then(student=>res.json({msg:'Updated successfully'}))
    .catch(err=>res.status(400).json({error:'Unable to update the Database'}));
});

router.delete('/:id',(req,res)=>{
    Student.findByIdAndRemove(req.params.id,req.body)
    .then(student=>res.json({msg:'Student entry deleted successfully'}))
    .catch(err=>res.status(404).json({error:'No such student'}));
});

module.exports=router;