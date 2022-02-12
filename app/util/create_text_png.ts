import { imageUploadBuffer } from '../middleware/upload_image'
var text2png = require('text2png');

export const createText = async (fileName: string, text: string) => {
    const resultText: Buffer = text2png(text, {
        font: '17px sans-serif',
        color: 'rgba(0, 25, 255, 1)',
        backgroundColor: 'rgba(0, 25, 255, 0)',
        lineSpacing: 10,
        padding: 20,
        output: 'buffer'
    })

    return await imageUploadBuffer("text/" + fileName, resultText)
}

export const createTag = async (fileName: string, text: string) => {
    const resultText: Buffer = text2png(text, {
        font: '13px sans-serif',
        color: 'rgba(0, 25, 255, 1)',
        backgroundColor: 'rgba(0, 25, 255, 0)',
        lineSpacing: 10,
        padding: 20,
        output: 'buffer'
    })

    return await imageUploadBuffer("text/" + fileName, resultText)
}