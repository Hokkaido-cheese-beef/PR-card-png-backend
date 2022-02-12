import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { createIconChart } from '../controllers/create_icon_chart'
import { createChart } from '../controllers/create_chart'
import { createNameTagTexts } from '../controllers/create_name_tag_text'
import { createIconChartType, createChartType, createNameTextsType } from '../type/getPrameterType'
import { createIconChartResPonse, createNameTextsResponse } from '../type/responseType'
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

export const router = express.Router()

router.post('/newIconChart', (req, res) => {

    const parameter: createIconChartType = req.body


    createIconChart(parameter).then((result: createIconChartResPonse) => {
        res.status(200).send(result)
    })
})

router.post('/createChart', (req, res) => {

    const parameter: createChartType = req.body


    createChart(parameter).then((result: string) => {
        res.status(200).send({ chartURL: result })
    })
})

router.post('/createNameTexts', (req, res) => {

    const parameter: createNameTextsType = req.body


    createNameTagTexts(parameter).then((result: createNameTextsResponse) => {
        res.status(200).send(result)
    })
})

app.use((req, res) => {
    res.status(404)
    res.render('error', {
        param: {
            status: 404,
            message: 'not right request'
        }
    })
})