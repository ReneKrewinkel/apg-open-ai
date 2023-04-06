import { types } from '../App'


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

    return [result, error]
}




const generateResult = async(type, prompt) => {

    if(type === types.text ) return await generateText( prompt )
    if(type === types.image) return await generateImage( prompt )
}

export { generateResult }