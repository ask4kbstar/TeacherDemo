const express = require('express');
const router = express.Router();

const Teacher = require('../models/teachers');

router.get('/teachers', (req, res, next)=>{
    Teacher.find(function(err,teachers){
        res.json(teachers);
    })
});

router.post('/teacher',(req, res, next)=>{
    let newTeacher = new Teacher({
        first_name: req.body.first_name,
		last_name: req.body.last_name,
		ogsb_no: req.body.ogsb_no,
		school_name: req.body.school_name,
		designation: req.body.designation,
		grade_level: req.body.grade_level,
		gender: req.body.gender,
		trcn_no: req.body.trcn_no,
		qualifications_with_date: req.body.qualifications_with_date,
		highest_qualification_with_date: req.body.highest_qualification_with_date,
		course: req.body.course,
		permanent_home_address: req.body.permanent_home_address,
		phone_no: req.body.phone_no,
		email_address: req.body.email_address,
		next_of_kin: req.body.next_of_kin,
		next_of_kin_phone_no: req.body.next_of_kin_phone_no
    });

    newTeacher.save((err,Teacher)=>{
        if(err)
        {
            res.json({msg: 'failed to add Teacher'});
        }
        else{
            res.json({msg: 'Teacher added successfully'});;
        }
    });
});

router.put('/teacher/:id', function(req, res){
    Teacher.findOneAndUpdate({
        _id:req.params.id
    },{$set:{school_name:req.body.school_name}},
    {upsert:true},
        function(err, newTeacher){
            if(err){
                console.log('error occured');
            }else{
                console.log(newTeacher);
                res.send(newTeacher);;
            }
        });
    });

router.delete('/teacher/:id',(req, res, next)=>{
    Teacher.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;