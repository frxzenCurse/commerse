import { Route, Switch, Redirect } from 'react-router-dom'
import { PUBLIC_ROUTES } from '../routes';

const AppRouter = () => {
  return (
    <Switch>
      {PUBLIC_ROUTES.map(({ path, component }) =>
        <Route key={path} path={path} component={component} exact />
      )}
      <Redirect to={'/products'} />
    </Switch>
  )
}

export default AppRouter
