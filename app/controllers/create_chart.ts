import { createRadarChart } from '../util/make_rader_chart'
import { createChartType } from '../type/getPrameterType'

export const createChart = async (parameter: createChartType): Promise<string> => {
    return await createRadarChart(parameter.status.itemName, parameter.status.itemScore, "other_chart", parameter.chartName)
}