import { Router } from "express"

const router = Router()

router.post('/signin', (req, res) => {
    res.status(200).json({message: 'signing...!'})
})

router.post('/signup', (req, res) => {
    res.status(200).json({message: 'Register...!'})
})

router.post('/signout', (req, res) => {
    res.status(200).json({message: 'signout ...!'})
})

router.get('/profile', (req, res) => {
    res.status(200).json({message: 'user profile...!'})
})
export default router;