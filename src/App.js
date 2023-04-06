import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
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

    const [textResult, setTextResult] = useState('')

  const generate = async (type) => {
      setType( type )
      setResult(true)
      const [result, error] = await generateResult(type, prompt)

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

          { isError && <h1>Fout</h1> }
          { (hasResult && type === types.text)  && <h1>{ textResult }</h1> }
          { (hasResult && type === types.image) && <h1>IMage</h1> }

      </div>
  )
}
export default App
