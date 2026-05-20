import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FactionDetail from './pages/FactionDetail'
import SpearheadDetail from './pages/SpearheadDetail'
import PhaseGuide from './pages/PhaseGuide'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faction/:factionId" element={<FactionDetail />} />
        <Route path="/faction/:factionId/spearhead/:spearheadId" element={<SpearheadDetail />} />
        <Route path="/faction/:factionId/spearhead/:spearheadId/phases" element={<PhaseGuide />} />
      </Routes>
    </Router>
  )
}

export default App
