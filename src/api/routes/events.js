const Router = require("express");
const router = new Router();

const controller = require('../controllers/EventsController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete);

router.get('/locations/:locationId', controller.getAllOfLocation);

module.exports = router