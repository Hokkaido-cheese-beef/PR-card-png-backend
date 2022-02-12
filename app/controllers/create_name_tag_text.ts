import { createText } from '../util/create_text_png'
import { createName, createSmallText, createMiddleText } from '../util/create_text'
import { createNameTextsType } from '../type/getPrameterType'
import { createNameTextsResponse } from '../type/responseType'

export const createNameTagTexts = async (parameter: createNameTextsType): Promise<createNameTextsResponse> => {
    console.log(parameter.hashTags);
    var tags: string = ""
    const lenOfTag: number = parameter.hashTags.length != 0 ? parameter.hashTags.length - 1 : 0
    for (var i = 0; i < lenOfTag + 1; i++) {
        if (i % 2 != 0) { tags += "      " + "#" + parameter.hashTags[i] }
        else { tags += "#" + parameter.hashTags[i] }

        if (i != lenOfTag - 1 && i % 2 != 0) tags += "\n"
    }
    console.log(tags)
    var result: createNameTextsResponse = {
        nameImage: await createName(parameter.userNameFileN, parameter.userName.name, parameter.userName.nickName),
        tagImage: await createSmallText(parameter.hashTagsFileN, tags),
        freeImage: await createMiddleText(parameter.freeTextFileN, parameter.freeText)
    }
    return await result
}