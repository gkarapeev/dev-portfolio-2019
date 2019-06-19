import CV from './pages/CV/cv'
import Certificates from './pages/Certificates/Certificates'
import Portfolio from './pages/Portfolio/Portfolio'
import About from './pages/About/About'


const routes = [
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/cv",
    name: "CV",
    component: CV
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: Certificates
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

export default routes;