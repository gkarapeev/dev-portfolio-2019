import jwt_snippet from './jwt_auth'
import rest_snippet from './rest_api'

const snippet_list = {
  radix: [
    {
      title: 'JWT Token Authentication',
      code: jwt_snippet
    },
    {
      title: 'REST API',
      code: rest_snippet
    }
  ]
}

export default snippet_list;