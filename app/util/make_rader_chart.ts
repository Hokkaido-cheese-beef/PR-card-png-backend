import { ChartJSNodeCanvas } from 'chartjs-node-canvas'
import { imageUpload } from '../middleware/upload_image'

async function createRaderChartBase64(chartJSNodeCanvas: ChartJSNodeCanvas, labelData: string[], paramater: number[]) {
    const configuration = {
        type: 'radar',
        data: {
            labels: labelData,
            datasets: [{
                label: 'ステータス',
                data: paramater,
                backgroundColor: 'rgba(146,197,252, 0.7)',
                borderColor: 'rgba(146,197,252, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgb(46,106,177)'
            }],
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    stepSize: 20,
                    display: false,
                },
                gridLines: {
                    color: 'rgba(0, 25, 255, 1)',
                    lineWidth: 2
                },
                scaledLabel: {
                    display: false
                },
                pointLabels: {
                    fontSize: 20,
                    fontColor: 'rgba(0, 25, 255, 1)'
                }
            },
        },
    }
    return await chartJSNodeCanvas.renderToDataURL(configuration)
}

export const createRadarChart = async (labelData: string[], paramater: number[], folderName: string, fileName: string): Promise<string> => {
    const width = 400;
    const height = 400;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height })

    return await createRaderChartBase64(chartJSNodeCanvas, labelData, paramater).then(rawBase64_string =>
        imageUpload(folderName + "/" + fileName, rawBase64_string.replace('data:image/png;base64,', ''))
    )
}