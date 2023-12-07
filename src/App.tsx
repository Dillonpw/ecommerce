import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Content  from './Content'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
