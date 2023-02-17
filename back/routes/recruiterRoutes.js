const express = require('express');
const { AddRecruiter, FindAllRecruiters, FindSingleRecruiter, UpdateRecruiter, DeleteRecruiter } = require('../controllers/recruiter.controller');
const router = express.Router();

// add recruiter
router.post('/recruiter', AddRecruiter);

// find all recruiters
router.get('/recruiter',FindAllRecruiters );

// find single recruiter
router.get('/recruiter/:id', FindSingleRecruiter);

// modify recruiter
router.put('/recruiter/:id',UpdateRecruiter );

// add recruiter
router.delete('/recruiter/:id', DeleteRecruiter);

module.exports = router;