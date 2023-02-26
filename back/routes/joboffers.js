const express = require('express');
const { AddJobOffer, FindAllJobOffers, FindSingleJobOffer, UpdateJobOffer, DeleteJobOffer } = require('../controllers/joboffers.controller');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//require auth for all job routes
router.use(requireAuth);

// add employee
router.post('/joboffer', AddJobOffer);

// find all employees
router.get('/joboffers',FindAllJobOffers );

// find single employee
router.get('/joboffer/:id', FindSingleJobOffer);

// modify employee
router.put('/joboffer/:id',UpdateJobOffer );

// add employee
router.delete('/joboffer/:id', DeleteJobOffer);




module.exports = router;
