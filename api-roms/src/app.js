import express from 'express'
import indexRouter from './routes/index.routes.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import gamesRoutes from './routes/games.routes.js'
import consolesRoutes from './routes/consoles.routes.js'

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.use(express.json())
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/api/auth', authRoutes)
app.use('/api/games', gamesRoutes)
app.use('/api/consoles', consolesRoutes)


export default app;