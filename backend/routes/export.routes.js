const router = require('express').Router();
const ctrl = require('../controllers/export.controller');

router.get('/all', ctrl.exportAll);

module.exports = router;
