import { Route, Switch, Redirect } from 'react-router-dom'
import { PAGE404 } from '../data/pages';
import { ROUTES } from '../routes';

const AppRouter = () => {
  return (
    <Switch>
      {ROUTES.map(({ path, component, render }) =>
        <Route key={path} path={path} component={component} exact render={render} />
      )}
      <Redirect to={PAGE404} />
    </Switch>
  )
}

export default AppRouter
