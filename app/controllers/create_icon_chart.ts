import { imageUpload } from '../middleware/upload_image'
import { createRadarChart } from '../util/make_rader_chart'
import { createIconChartType } from '../type/getPrameterType'
import { createIconChartResPonse } from '../type/responseType'

export const createIconChart = async (parameter: createIconChartType): Promise<createIconChartResPonse> => {
    var result: createIconChartResPonse = {
        statusImage: await createRadarChart(parameter.status.itemName, parameter.status.itemScore, "rader", parameter.chartName),
        faceImage: await imageUpload("icon/" + parameter.faceIconName, parameter.faceImage)
    }

    return result
}