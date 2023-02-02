import express from 'express'
import indexRouter from './routes/index.routes.js'
import authRoutes from './routes/auth.routes.js'
import gamesRoutes from './routes/games.routes.js'
import consolesRoutes from './routes/consoles.routes.js'
import cors from 'cors'
const app = express()

const dominios = [process.env.FRONTEND_URL]

const corsOptions = {
  origin: function (origin, callback) {
    if(dominios.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por cors'))
    }
  }
}
app.use(cors(corsOptions))

app.use(express.json())

app.use('/', indexRouter)
app.use('/api/auth', authRoutes)
app.use('/api/games', gamesRoutes)
app.use('/api/consoles', consolesRoutes)


export default app;