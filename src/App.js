import Button from './components/Button'
import './app.css'

const App = () => {

  const generate = () => {
      alert("geklikt")
  }

  return(
      <div>
          <Button label={"Text"} fn={ generate }/>
      </div>
  )
}
export default App
