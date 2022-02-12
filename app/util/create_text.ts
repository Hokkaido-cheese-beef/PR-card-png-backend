import { createCanvas } from 'canvas'
import { imageUpload } from '../middleware/upload_image'

export const createName = async (fileName: string, name: string, nickName: string): Promise<string> => {
    const canvas = createCanvas(320, 120)
    const ctx = canvas.getContext('2d')
    ctx.font = "bold 40px serif "
    ctx.fillStyle = 'rgba(0, 25, 255, 1)'
    ctx.fillText(name, 10, 40)
    ctx.font = '26px serif'
    ctx.fillText(nickName, 10, 70)
    return await imageUpload(fileName, ctx.canvas.toDataURL().replace('data:image/png;base64,', ''))
}

export const createSmallText = async (fileName: string, text: string,) => {
    const canvas = createCanvas(320, 120)
    const ctx = canvas.getContext('2d')
    ctx.font = '26px serif'
    ctx.fillStyle = 'rgba(0, 25, 255, 1)'
    ctx.fillText(text, 10, 26);
    return await imageUpload(fileName, ctx.canvas.toDataURL().replace('data:image/png;base64,', ''))
}

export const createMiddleText = async (fileName: string, text: string,) => {
    var strlen = text.length
    var fixStr: string
    if (strlen < 11) {
        fixStr = text
    } else if (strlen < 21) {
        fixStr = text.substr(0, 10) + "\n" + text.substr(10, strlen + 1 - 10)
    } else {
        fixStr = text.substr(0, 10) + "\n" + text.substr(10, 10) + "\n" + text.substr(20, strlen + 1 - 20)
    }
    console.log(fixStr);

    const canvas = createCanvas(360, 220)
    const ctx = canvas.getContext('2d')
    ctx.font = '34px serif'
    ctx.fillStyle = 'rgba(0, 25, 255, 1)'
    ctx.fillText(fixStr, 10, 34);
    return await imageUpload(fileName, ctx.canvas.toDataURL().replace('data:image/png;base64,', ''))
}


