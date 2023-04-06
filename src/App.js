import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import './app.css'

const App = () => {

    const [prompt, setPrompt] = useState('')
    const [isError, setError] = useState(true)

  const generate = () => {
      alert(prompt)
  }

  const inputHandler = (value) => {
      setError(false)
      setPrompt(value)
  }

  return(
      <div>
          <Input handler={ inputHandler }/>
          <div>
            <Button label={"Text"} fn={ generate }/>
            <Button label={"Image"} fn={ generate }/>
          </div>
          <div>
              { isError && <h1>Fout</h1> }
          </div>
      </div>
  )
}
export default App
