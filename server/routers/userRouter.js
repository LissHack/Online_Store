const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
// router.get('/auth', (req, rea) => {
//     res.json({message: 'all working'})
// })

module.exports = router