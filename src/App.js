import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import './app.css'

const types = {
    text: 'text',
    image: 'image'
}

const App = () => {

    const [prompt, setPrompt] = useState('')
    const [isError, setError] = useState(true)
    const [hasResult, setResult] = useState(false)
    const [type, setType] = useState(null)

  const generate = (type) => {
      setType( type )
      setResult(true)
      ////alert(`${type} ${prompt}`)
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
          { (hasResult && type === types.text)  && <h1>Text</h1> }
          { (hasResult && type === types.image) && <h1>IMage</h1> }

      </div>
  )
}
export default App
