const router = require('express').Router();
const ctrl = require('../controllers/invoice.controller');


router.get('/download/:id', ctrl.downloadPDF);
router.post('/', ctrl.create);
router.get('/', ctrl.getAll);

module.exports = router;
