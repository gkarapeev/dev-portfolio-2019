import Skills from './pages/Skills/Skills'
import Certificates from './pages/Certificates/Certificates'
import Examples from './pages/Examples/Examples'
import Contact from './pages/Contact/Contact'

const routes = [
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: Certificates
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
];

export default routes;