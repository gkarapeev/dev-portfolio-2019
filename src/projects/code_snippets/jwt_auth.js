const code =
`const PrivateRoute = (props) => {

  const { component: Component, ...rest } = props;

  const token = window.localStorage.getItem('token');
  let valid = false;

  if (token) {
    const now = new Date();
    const expiry = new Date(jwt_decode(token).exp * 1000);
    valid = token && (expiry > now);

    if (!valid) {
      console.log('Token is present, but expired.')
    }
  }

  return (
    <Route {...rest} render={(props) => (valid ? <Component {...props} /> : <Redirect to='/login' />)} />
  )
}

export default PrivateRoute;`;

export default code;