import express from 'express'
import cors from 'cors'
import { router } from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 3000


app.use('/', router)

app.listen(port)
console.log('listen on port ' + port);
