import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ReadmeViewer from './Components/README/ReadmeViewer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:repo" element={<ReadmeViewer />} />
      </Routes>
    </Router>
  )
}

export default App