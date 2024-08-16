import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Base from './pages/Base.jsx';
import Projects from './pages/ProjectsPage.jsx';
import Contact from './pages/ContactPage.jsx';
import './index.css';
import NPS_PNW from './pages/projects/NPS_PNW.jsx';
import DCSite from './pages/projects/dcSite.jsx';
import Designs from './pages/DesignsPage.jsx';
import PortfolioSite from './pages/projects/PortfolioSite.jsx';
import DCBrand from './pages/designs/DC_Branding.jsx';
import TaskPage from './pages/designs/Task_Page.jsx';
import DC_Web from './pages/designs/DC_webdesigns.jsx';
import InternPage from './pages/designs/InternPageRedesign.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="designs" element={<Designs />} />
        <Route path="projects/NPS_PNW" element={<NPS_PNW />} />
        <Route path="projects/dcSite" element={<DCSite />} />
        <Route path="projects/Portfolio" element={<PortfolioSite />} />
        <Route path="designs/DC_Branding" element={<DCBrand />} />
        <Route path="designs/Task_Page" element={<TaskPage />} />
        <Route path="designs/DC_webdesigns" element={<DC_Web />} />
        <Route path="designs/InternPageRedesign" element={<InternPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);

