import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Qualifications from "./pages/Qualifications"
import Education from "./pages/Education"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
