const express = require('express');
const { AddJobOffer, FindAllJobOffersSingleRecruiter,FindAllJobOffersAllRecruiters, FindSingleJobOffer, UpdateJobOffer, DeleteJobOffer } = require('../controllers/joboffers.controller');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//require auth for all job routes
router.use(requireAuth);

// add joboffer
router.post('/joboffer', AddJobOffer);

// find all joboffers for one recruiter
router.get('/joboffers',FindAllJobOffersSingleRecruiter );

// find all joboffers for all recruiter
router.get('/joboffersall',FindAllJobOffersAllRecruiters);

// find single joboffer
router.get('/joboffer', FindSingleJobOffer);

// modify joboffer
router.put('/jobofferupdate',UpdateJobOffer );

// add joboffer
router.delete('/jobofferdelete', DeleteJobOffer);




module.exports = router;
