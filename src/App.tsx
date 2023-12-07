import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Content from './Content.tsx'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element= />
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
