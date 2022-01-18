const express = require('express');
const router = express.Router();

const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require('../controllers/jobs');

// parent route hostdomain/api/v1/

router.get('/', getAllJobs);

router.post('/', createJob);

router.get('/:id', getJob);

router.patch('/:id', updateJob);

router.delete('/:id', deleteJob);

module.exports = router
