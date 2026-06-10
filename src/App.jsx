import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Locations from './pages/Locations'
import Blog from './pages/Blog'
import Calculator from './pages/Calculator'
import Walkthrough from './pages/Walkthrough'
import LiveNews from './pages/LiveNews'
import Magazine from './pages/Magazine'
import AnnualReport from './pages/AnnualReport'
import Feasibility from './pages/Feasibility'
import TeamSection from './components/home/TeamSection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
<Route path="locations" element={<Locations />} />
<Route path="walkthrough" element={<Walkthrough />} />
<Route path="blog" element={<Blog />} />
<Route path="calculator" element={<Calculator />} />
<Route path="live-news" element={<LiveNews />} />
<Route path="magazine" element={<Magazine />} />
<Route path="annual-reports" element={<AnnualReport />} />
<Route path="services/feasibility" element={<Feasibility />} />
<Route path="team" element={<TeamSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App