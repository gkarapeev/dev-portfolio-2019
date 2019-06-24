const code =
`import images from '../img_index/images'
import snippet_list from './code_snippets/snippet_list'

const project_list = [
  {
    path: '/portfolio/application-manager',
    title: 'Application Manager',
    thumb: images.thumbs.AppManager,
    projectPic: images.thumbs.AppManager,
    snippets: snippet_list.appManager,
    description: 'This was part of my entry for an internship at Prime Holding. During this project I learned what CRUD means and I managed to make it work on time for the submission. My application was successful, so that was also a very happy moment for me.',
    features: ['CRUD Operations', 'DOM manipulation', 'HTML Form basics', 'Importing Google fonts'],
    stack: ['html', 'css', 'js'],
    url: 'http://www.google.bg',
    gitHubLink: 'https://github.com/gkarapeev/Personal-Projects/tree/master/Prime%20Holding%20Entry%20Test/Frontend'
  },
  {
    path: '/portfolio/shopping-cards',
    title: 'Shopping Cards',
    thumb: images.thumbs.ShoppingCards,
    projectPic: images.thumbs.ShoppingCards,
    snippets: snippet_list.shoppingCards,
    description: 'Here we still had to use purely vanilla HTML, CSS and JS in order to get the fundamentals hammered in. Writing and re-writing the sorting and filtering algorithms several times until they worked together was the most interesting part of this project.',
    features: ['Vanilla HTML5, CSS3, and JS', 'Sorting and Filtering algorithms', 'Smooth UX', 'Using the browser localStorage', 'Automatic ID generation algorithm', 'Frontend form validation'],
    stack: ['html', 'css', 'js', 'ps', 'il', 'fig'],
    url: 'http://www.google.bg',
    gitHubLink: 'https://gitlab.com/gkarapeev/discount-cards'
  }

  // ...etc
]

export default project_list;`;

export default code;