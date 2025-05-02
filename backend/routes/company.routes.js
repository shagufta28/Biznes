const router = require('express').Router();
const ctrl = require('../controllers/company.controller');
const upload = require('../middlewares/upload.middleware');


// POST with logo
router.post('/', upload.single('logo'), ctrl.createOrUpdateCompany);


// GET by GSTIN
router.get('/:gstin', ctrl.getCompany);

router.post('/', ctrl.create);
router.get('/', ctrl.getAll);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
