import { Configuration, OpenAIApi } from 'openai'

import { types } from '../App'

const configuration = new Configuration({
    apiKey: "xxx"
})

const generateText = async (prompt) => {
    /// ai code
    let result, error


    result = "Hij doet het!!"
    error = false

    return [result, error]
}

const generateImage = async (prompt) => {
    /// ai code
    let result, error

    result = "https://www.rtlnieuws.nl/sites/default/files/content/images/2023/04/04/CROPPER_ANP-466401194.jpg?itok=jh25EPFs&width=2048&height=1152&impolicy=semi_dynamic"
    error = false
    return [result, error]
}




const generateResult = async(type, prompt) => {

    if(type === types.text ) return await generateText( prompt )
    if(type === types.image) return await generateImage( prompt )
}

export { generateResult }