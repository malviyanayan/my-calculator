import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from './components/Buttons'
import Display from './components/Display'
import './App.css'

function App() {
  

  return (
    <>
      <div className='calculator border mx-auto mt-5 rounded shadow bg-light '>
        <h6 className="text-end opacity-75 mb-3 m-3">Nayan Calculator</h6>
        <Display />
        <hr style={{boxShadow:'0 2px 2px black'}} />
        <Buttons />
      </div>
    </>
  )
}

export default App
