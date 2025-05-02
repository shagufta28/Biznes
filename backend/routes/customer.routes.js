const router = require('express').Router();
const ctrl = require('../controllers/customer.controller');

router.post('/', ctrl.create);
router.get('/', ctrl.getAll);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
