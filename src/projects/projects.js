import images from '../img_index/images'
import snippet_list from './code_snippets/snippet_list'

const project_list = [
  {
    path: '/portfolio/tic-tac-toe',
    title: 'Tic-Tac-Toe',
    thumb: images.thumbs.TicTacToe,
    projectPic: images.thumbs.TicTacToe,
    snippets: snippet_list.ticTacToe,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    features: ['Objects', 'Object constructors'],
    stack: ['html', 'css', 'js', 'il']
  },
  {
    path: '/portfolio/application-manager',
    title: 'Application Manager',
    thumb: images.thumbs.AppManager,
    projectPic: images.thumbs.AppManager,
    snippets: snippet_list.appManager,
    description: 'This was part of my entry for an internship at Prime Holding. During this project I learned what CRUD means and I managed to make it work on time for the submission. My application was successful, so that was also a very happy moment for me.',
    features: ['CRUD Operations', 'DOM manipulation', 'HTML Form basics', 'Importing Google fonts'],
    stack: ['html', 'css', 'js']
  },
  {
    path: '/portfolio/exercise',
    title: 'Exercise',
    thumb: images.thumbs.Exercise,
    projectPic: images.thumbs.Exercise,
    snippets: snippet_list.exercise,
    description: 'This one I can\'t fully show because it is part of a real project for a client. It was my first time working qith Bootstrap and jQuery.',
    features: ['Bootstrap', 'jQuery', 'Animated SVG elements'],
    stack: ['html', 'css', 'js', 'bs', 'jq', 'ps', 'il', 'zp']
  },
  {
    path: '/portfolio/shopping-cards',
    title: 'Shopping Cards',
    thumb: images.thumbs.ShoppingCards,
    projectPic: images.thumbs.ShoppingCards,
    snippets: snippet_list.shoppingCards,
    description: 'Here we still had to use purely vanilla HTML, CSS and JS in order to get the fundamentals hammered in. Writing and re-writing the sorting and filtering algorithms several times until they worked together was the most interesting part of this project.',
    features: ['Vanilla HTML5, CSS3, and JS', 'Sorting and Filtering algorithms', 'Smooth UX', 'Using the browser localStorage', 'Automatic ID generation algorithm'],
    stack: ['html', 'css', 'js', 'ps', 'il', 'fig']
  },
  {
    path: '/portfolio/interngram',
    title: 'InternGram',
    thumb: images.thumbs.InternGram,
    projectPic: images.thumbs.InternGram,
    snippets: snippet_list.internGram,
    description: '',
    features: ['My first React project!', 'Dynamic post loading (lazy loading)', 'Visualizing Posts from data', 'HTTP Requests'],
    stack: ['html', 'css', 'js', 'ps', 'il', 'r']
  },
  {
    path: '/portfolio/radix',
    title: 'Radix',
    thumb: images.thumbs.Radix,
    projectPic: images.thumbs.Radix,
    snippets: snippet_list.radix,
    description: '',
    features: [''],
    stack: ['html', 'css', 'js', 'ss', 'r', 'gl', 'fig', 'pm']
  }
]

export default project_list;