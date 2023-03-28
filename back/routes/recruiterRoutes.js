const express = require('express');
const requireAuth= require ('../middleware/requireAuth')
const { AddRecruiter, FindAllRecruiters, FindSingleRecruiter, UpdateRecruiter, DeleteRecruiter } = require('../controllers/recruiter.controller');
const router = express.Router();

// require auth for all  routes
router.use(requireAuth);

// add recruiter
router.post('/recruiter', AddRecruiter);

// find all recruiters
router.get('/recruiter',FindAllRecruiters );

// find single recruiter
router.get('/recruiter/:id', FindSingleRecruiter);

// modify recruiter
router.put('/recruiterupdate',UpdateRecruiter );

// add recruiter
router.delete('/recruiter/:id', DeleteRecruiter);

module.exports = router;