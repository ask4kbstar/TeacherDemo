const mongoose = require('mongoose');


const TeacherSchema = mongoose.Schema({
    first_name: {
		type: String,
		required: [true, 'please provide first name'],
		minlenght: 5,
		maxlength: 50,
	},
	last_name: {
		type: String,
		required: [true, 'please provide last name'],
		minlenght: 5,
		maxlength: 50,
	},
	ogsb_no: {
		type: String,
		required: [true, 'please provide ogsb number'],
		minlenght: 3,
		maxlength: 50,
	},
	school_name: {
		type: String,
		required: [true, 'please provide school name'],
		minlenght: 10,
		maxlength: 50,
	},
	designation: {
		type: String,
		required: [true, 'please provide designation'],
		minlenght: 10,
		maxlength: 50,
	},
	grade_level_with_step: {
		type: String,
		required: [true, 'please provide grade level with step'],
		minlenght: 2,
		maxlength: 50,
	},
	gender: {
		type: String,
		required: [true, 'please provide gender'],
		minlenght: 4,
		maxlength: 50,
	},
	trcn_no: {
		type: String,
		required: [true, 'please provide TRCN number'],
		minlenght: 5,
		maxlength: 50,
	},
	qualifications_with_date: {
		type: String,
		required: [true, 'please provide all qualifications with date'],
		minlenght: 3,
		maxlength: 50,
	},
	highest_qualification_with_date: {
		type: String,
		required: [true, 'please provide highest qualification with date'],
		minlenght: 3,
		maxlength: 50,
	},
	course: {
		type: String,
		required: [true, 'please provide Area of Specialisation'],
		minlenght: 5,
		maxlength: 50,
	},
	permanent_home_address: {
		type: String,
		required: [true, 'please provide Permanent Home Address'],
		minlenght: 10,
		maxlength: 50,
	},
	phone_no: {
		type: String,
		required: [true, 'please provide mobile number'],
		minlenght: 10,
		maxlength: 50,
	},
	email_address: {
		type: String,
		required: [true, 'please provide Email Address'],
		minlenght: 10,
		maxlength: 50,
	},
	next_of_kin: {
		type: String,
		required: [true, 'please provide Next of Kin name'],
		minlenght: 10,
		maxlength: 50,
	},
	next_of_kin_phone_no: {
		type: String,
		required: [true, 'please provide Next of Kin Mobile No'],
		minlenght: 10,
		maxlength: 50,
	}
	});

const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema);