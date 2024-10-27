import express from 'express'
import morgan from 'morgan'
import router from './routes/user.routes.js'

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', router)
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'status error',
        message: err.message
    })
})



export default app;