import { Configuration, OpenAIApi } from 'openai'

import { types } from '../App'

const configuration = new Configuration({
    apiKey: "your-key-here"
})

const openai = new OpenAIApi(configuration)

const generateText = async (prompt) => {
    /// ai code
    let result, error
    try {

        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 500
        })

        result = completion.data.choices[0].text

    } catch(e) {
        error = e
    }

    return [result, error]
}

const generateImage = async (prompt) => {
    /// ai code
    let result, error

    try {
        const completion = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '512x512'
        })

        result = completion.data.data[0].url
    } catch (e) {
        error = e
    }

    return [result, error]
}




const generateResult = async(type, prompt) => {

    if(type === types.text ) return await generateText( prompt )
    if(type === types.image) return await generateImage( prompt )
}

export { generateResult }