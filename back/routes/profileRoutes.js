const express = require('express');
const { AddProfile, FindAllProfiles, FindSingleProfile, UpdateProfile, DeleteProfile } = require('../controllers/profileController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//require auth for all job routes
// router.use(requireAuth);

// add employee
router.post('/profile', AddProfile);

// find all employees
router.get('/profiles',FindAllProfiles );

// find single employee
router.get('/profile/:id', FindSingleProfile);

// modify employee
router.put('/profile/:id',UpdateProfile);

// add employee
router.delete('/profile/:id', DeleteProfile);




module.exports = router;