import jwt_snippet from './jwt_auth'
import rest_snippet from './rest_api'
import turn_snippet from './turn'
import lazy_loading from './lazy_loading'
import active_navlink from './active_navlink'
import bs_carousel from './bs_carousel'
import manual_form_read from './manual_form_read'
import filter_state from './filter_state'
import sorting from './sorting'
import data_flow from './data_flow'

const snippet_list = {
  ticTacToe: [
    {
      title: 'Executing a player turn',
      code: turn_snippet
    }
  ],
  appManager: [
    {
      title: 'Manual handling of form data through vanilla JS',
      code: manual_form_read
    }
  ],
  internGram: [
    {
      title: 'Dynamic post loading',
      code: lazy_loading
    }
  ],
  exercise: [
    {
      title: 'Animated scrolling & active navbar link style tied to scroll location with jQuerry',
      code: active_navlink
    },
    {
      title: 'Bootstrap grid system & carousel',
      code: bs_carousel
    }
  ],
  shoppingCards: [
    {
      title: 'My algorithm for record sorting',
      code: sorting
    },
    {
      title: 'My own way of managing the state of every active filter without React',
      code: filter_state
    }
  ],
  radix: [
    {
      title: 'JWT Token Authentication & Protected Route Component',
      code: jwt_snippet
    },
    {
      title: 'REST API',
      code: rest_snippet
    }
  ],
  portfolio: [
    {
      title: 'Smart generation of routes, pages and content. All coming from one place, no code repetition.',
      code: data_flow
    }
  ]
}

export default snippet_list;