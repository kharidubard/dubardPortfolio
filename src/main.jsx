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
import AliveIV from './pages/projects/AliveIV.jsx';
import DCBrand from './pages/designs/DC_Branding.jsx';
import TaskPage from './pages/designs/Task_Page.jsx';
import DC_Web from './pages/designs/DC_webdesigns.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/dubardPortfolio'>
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/designs" element={<Designs />}/>
        <Route path="pages/projects/NPS_PNW" element={<NPS_PNW />} />
        <Route path="pages/projects/dcSite" element={<DCSite />} />
        <Route path="pages/projects/AliveIV" element={<AliveIV />} />
        <Route path="pages/designs/DC_Branding" element={<DCBrand />} />
        <Route path="pages/designs/Task_Page" element={<TaskPage />} />
        <Route path="pages/designs/DC_webdesigns" element={<DC_Web />} />
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
