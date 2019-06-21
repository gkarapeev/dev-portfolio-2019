import images from '../img_index/images'
import snippet_list from '../projects/code_snippets/snippet_list'

const project_list = [
  {
    path: '/portfolio/tic-tac-toe',
    title: 'Tic-Tac-Toe',
    thumb: images.thumbs.TicTacToe,
    projectPic: images.thumbs.TicTacToe,
    snippets: snippet_list.radix,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    stack: ['html', 'css', 'js']
  },
  {
    path: '/portfolio/application-manager',
    title: 'Application Manager',
    thumb: images.thumbs.AppManager,
    projectPic: images.thumbs.AppManager,
    snippets: snippet_list.radix,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    stack: ['html', 'css', 'js']
  },
  {
    path: '/portfolio/interngram',
    title: 'InternGram',
    thumb: images.thumbs.InternGram,
    projectPic: images.thumbs.InternGram,
    snippets: snippet_list.radix,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    stack: ['html', 'css', 'js', 'r', 'ps', 'il']
  },
  {
    path: '/portfolio/radix',
    title: 'Radix',
    thumb: images.thumbs.Radix,
    projectPic: images.thumbs.Radix,
    snippets: snippet_list.radix,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    stack: ['html', 'css', 'js', 'ss', 'r', 'gl', 'fig', 'pm']
  },
  {
    path: '/portfolio/shopping-cards',
    title: 'Shopping Cards',
    thumb: images.thumbs.ShoppingCards,
    projectPic: images.thumbs.ShoppingCards,
    snippets: snippet_list.radix,
    description: 'This was my first ever personal JavaScript project. I did it several weeks after I started my JS course in SoftUni. We hadn\'t been taught DOM manipulation or OOP yet, but I was eager to put what I know to practice, so I did my research, I found out how to make an object constructor and made things work. Although it\'s simple, it was a big step for me and thinking about it still makes me smile.',
    stack: ['html', 'css', 'js']
  },
  {
    path: '/portfolio/exercise',
    title: 'Exercise',
    thumb: images.thumbs.ShoppingCards,
    projectPic: images.thumbs.ShoppingCards,
    snippets: snippet_list.radix,
    description: 'The one which I can\'t show because it\'s from a real client. Show it pixelated.',
    stack: ['html', 'css', 'js', 'zp']
  }
]

export default project_list;