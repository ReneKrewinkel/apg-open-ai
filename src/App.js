import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import Paragraph from './components/Paragraph'
import Image from './components/Image'
import Error from './components/Error'

import './app.css'
import {generateResult} from "./lib/API";

export const types = {
    text: 'text',
    image: 'image'
}

const App = () => {

    const [prompt, setPrompt] = useState('')
    const [isError, setError] = useState(true)
    const [hasResult, setResult] = useState(false)
    const [type, setType] = useState(null)

    const [result, setGeneratedResult] = useState('')

  const generate = async (type) => {
      setType( type )
      setResult(true)
      const [result, error] = await generateResult(type, prompt)
      setGeneratedResult(result)
      if(error) {
          setError(true)
          setResult(false)
      } else {
          setError(false)
          setResult(true)
      }

  }

  const inputHandler = (value) => {
      setError(false)
      setPrompt(value)
  }

  return(
      <div>
          <Input handler={ inputHandler }/>
          <div className="button-container">
            <Button label={"Text"} fn={ generate } type={ types.text } />
            <Button label={"Image"} fn={ generate } type={ types.image } />
          </div>

          { isError && <Error /> }
          { (hasResult && type === types.text)  && <Paragraph result={result} /> }
          { (hasResult && type === types.image) && <Image result={result} /> }

      </div>
  )
}
export default App
