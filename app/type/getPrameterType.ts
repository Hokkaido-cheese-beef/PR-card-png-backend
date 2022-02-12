export type Character = {
    name: string,
    nickname: string
}

export type stautsType = {
    itemName: string[]
    itemScore: number[]
}

export type createChartType = {
    status: stautsType,
    chartName: string
}

export type createIconChartType = {
    faceImage: string,
    faceIconName: string,
    status: stautsType,
    chartName: string
}

export type createNameTextsType = {
    userName: {
        name: string,
        nickName: string
    },
    userNameFileN: string,
    hashTags: string[],
    hashTagsFileN: string,
    freeText: string,
    freeTextFileN: string
}