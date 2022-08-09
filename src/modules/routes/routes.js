const express = require('express')
const router = express.Router()
const {taskValidator, validate} = require('../../validator/validator')

const {
    createNewCost,
    getAllCosts,
    deleteCost,
    changeCostInfo,
} = require('../controllers/task.controller')

router.get('/costs', getAllCosts);
router.post('/costs', taskValidator, validate, createNewCost);
router.patch('/costs/:_id/text', taskValidator, validate, changeCostInfo);
router.delete('/costs/:_id', deleteCost);

module.exports = router