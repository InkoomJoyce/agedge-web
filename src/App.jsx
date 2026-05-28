import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Locations from './pages/Locations'
import Blog from './pages/Blog'

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
<Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App