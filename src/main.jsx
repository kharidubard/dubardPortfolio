import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Base from './pages/Base.jsx'
import Projects from './pages/ProjectsPage.jsx';
import Contact from './pages/ContactPage.jsx';
import './index.css'
import NPS_PNW from './pages/projects/NPS_PNW.jsx';
import DCSite from './pages/projects/dcSite.jsx';
import Designs from './pages/DesignsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/designs" element={<Designs />}/>
        <Route path="pages/projects/NPS_PNW" element={<NPS_PNW />} />
        <Route path="pages/projects/dcSite" element={<DCSite />} />
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
