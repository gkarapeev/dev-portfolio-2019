import images from '../img_index/images'
import snippet_list from './code_snippets/snippet_list'

const project_list = [
  {
    path: '/portfolio/radix',
    title: 'Radix',
    thumb: images.thumbs.Radix,
    projectPic: images.thumbs.Radix,
    snippets: snippet_list.radix,
    description: 'This was my first developer project in a team. The brief was to create a web SPA where a teacher can manage their courses and perform CRUD operations and sorting on them. Each course also has its details page where the teacher can also create articles and quizzes associated with the course. The quizzes are made through a Quiz-builder page where one can add questions of type \'Yes/No\', \'Multiple Choice\', and \'Many of many\'. The answer options are also fully editable and one could specify the correct answer(s). The app has login functionality and utilizes protected routes.',
    features: ['Git rebase & resolving conflicts', 'Google Material UI', 'Login & protected routes', 'Team project'],
    stack: ['html', 'css', 'js', 'ss', 'r', 'gl', 'fig', 'pm'],
    url: 'https://github.com/gkarapeev/Radix',
    gitHubLink: 'https://github.com/gkarapeev/Radix'
  },
  {
    path: '/portfolio/interngram',
    title: 'InternGram',
    thumb: images.thumbs.InternGram,
    projectPic: images.pics.InternGram,
    snippets: snippet_list.internGram,
    description: 'The brief here was to create an Instagram-like web app where users can create, edit, and delete posts. Posts were to be 1 of 3 types: image, link, or YouTube video. The other requirement was to implement an \'infinite scrollling\' functionality, which turned out quite simple. I opted for a mobile-first approach.',
    features: ['My first React project!', 'Infinite scroll through posts', 'Visualizing data', 'HTTP Requests'],
    stack: ['html', 'css', 'js', 'ps', 'il', 'fig', 'r'],
    url: 'https://gitlab.com/gkarapeev/ig',
    gitHubLink: 'https://gitlab.com/gkarapeev/ig'
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
    url: 'http://gesh.cosmoscube.org/crud/public/',
    gitHubLink: 'https://gitlab.com/gkarapeev/discount-cards'
  },
  {
    path: '/portfolio/application-manager',
    title: 'Application Manager',
    thumb: images.thumbs.AppManager,
    projectPic: images.thumbs.AppManager,
    snippets: snippet_list.appManager,
    description: 'This was part of my entry for an internship at Prime Holding. During this project I learned what CRUD means and I managed to make it work on time for the submission. My application was successful, so that was also a very happy moment for me.',
    features: ['CRUD Operations', 'DOM manipulation', 'HTML Form basics', 'Importing Google fonts'],
    stack: ['html', 'css', 'js'],
    url: 'http://gesh.cosmoscube.org/front-end/',
    gitHubLink: 'https://github.com/gkarapeev/Personal-Projects/tree/master/Prime%20Holding%20Entry%20Test/Frontend'
  },
  {
    path: '/portfolio/exercise',
    title: 'Exercise',
    thumb: images.thumbs.Exercise,
    projectPic: images.thumbs.Exercise,
    snippets: snippet_list.exercise,
    description: 'This one I can\'t fully show because it is part of a real project for a client. It was my first time working qith Bootstrap and jQuery.',
    features: ['Bootstrap', 'jQuery', 'Animated SVG elements', 'Frontend form validation', 'Media queries'],
    stack: ['html', 'css', 'js', 'bs', 'jq', 'ps', 'il', 'zp']
  },
  {
    path: '/portfolio/tic-tac-toe',
    title: 'Tic-Tac-Toe',
    thumb: images.thumbs.TicTacToe,
    projectPic: images.thumbs.TicTacToe,
    snippets: snippet_list.ticTacToe,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    features: ['Objects', 'Object constructors'],
    stack: ['html', 'css', 'js', 'il'],
    url: 'http://gesh.cosmoscube.org/tic-tac-toe/',
    gitHubLink: 'https://github.com/gkarapeev/TicTacToe'
  },
  {
    path: '/portfolio/portfolio',
    title: 'Software Development Portfolio 2019',
    thumb: images.thumbs.Portfolio,
    projectPic: images.thumbs.Portfolio,
    snippets: snippet_list.portfolio,
    description: 'Immediately after completing my internship at Prime Holding, I began putting this site together. It has taken me approximately 2 weeks from conceiving the idea, to designing the pages, to implementing the design and deploying the site.',
    features: ['First fully complete React project', 'Efficient data flow', 'Dynamic routes', 'Smart components', 'SVG animation'],
    stack: ['html', 'css', 'js', 'ss', 'r', 'gl', 'fig', 'pm'],
    url: 'https://github.com/gkarapeev/dev-portfolio-2019',
    gitHubLink: 'https://github.com/gkarapeev/dev-portfolio-2019'
  },
  {
    path: '/portfolio/media-production',
    title: 'Media Production',
    thumb: images.thumbs.Media,
    projectPic: images.thumbs.Media,
    description: 'This is my media production portfolio. My production & design skills always come in handy when I\'m designing user experiences and interfaces, so although I changed paths, it was still definitely worthwhile.',
    features: ['Made with WIX before I learned to code. :-)'],
    url: 'https://gkarapeev9.wixsite.com/georgi-karapeev'
  }
]

export default project_list;