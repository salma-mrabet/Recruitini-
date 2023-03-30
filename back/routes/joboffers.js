const express = require('express');
const { AddJobOffer, FindAllJobOffersSingleRecruiter, FindSingleJobOffer, UpdateJobOffer, DeleteJobOffer } = require('../controllers/joboffers.controller');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//require auth for all job routes
router.use(requireAuth);

// add employee
router.post('/joboffer', AddJobOffer);

// find all employees
router.get('/joboffers',FindAllJobOffersSingleRecruiter );

// find single employee
router.get('/joboffer', FindSingleJobOffer);

// modify employee
router.put('/jobofferupdate',UpdateJobOffer );

// add employee
router.delete('/jobofferdelete/:id', DeleteJobOffer);




module.exports = router;
