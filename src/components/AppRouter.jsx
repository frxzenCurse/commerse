import { Route, Switch, Redirect } from 'react-router-dom'
import { PAGE404 } from '../data/pages';
import { routes } from '../routes';

const AppRouter = () => {

  return (
    <Switch>
      {routes.map(({ path, component, render }) =>
        <Route key={path} path={path} component={component} exact render={render} />
      )}
      <Redirect to={PAGE404} />
    </Switch>
  )
}

export default AppRouter
