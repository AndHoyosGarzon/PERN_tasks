import { Router } from "express";

const router = Router()

router.get('/tasks', (req, res) => {
    res.status(200).json({message: 'Getting Tasks'})
})

router.get('/tasks/:id', (req, res) => {
    res.status(200).json({message: 'Getting One Task by ID'})
})

router.post('/tasks', (req, res) => {
    res.status(200).json({message: 'Created Tasks'})
})

router.put('/tasks/:id', (req, res) => {
    res.status(200).json({message: 'Updating Tasks'})
})

router.delete('/tasks/:id', (req, res) => {
    res.status(200).json({message: 'Deleting Tasks'})
})





export default router