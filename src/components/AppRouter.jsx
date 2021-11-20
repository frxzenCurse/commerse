import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom'
import { PAGE404 } from '../data/pages';
import { privateRoutes, publicRoutes } from '../routes';
import Loader from './Loader';

const AppRouter = ({ isLoading }) => {

  const { isAuth } = useSelector(state => state.login)

  return (
    <>
      {isLoading
        ?
        <Loader />
        :
        isAuth
          ?
          <Switch>
            {privateRoutes.map(({ path, component, render }) =>
              <Route key={path} path={path} component={component} exact render={render} />
            )}
            <Redirect to={PAGE404} />
          </Switch>
          :
          <Switch>
            {publicRoutes.map(({ path, component, render }) =>
              <Route key={path} path={path} component={component} exact render={render} />
            )}
            <Redirect to={PAGE404} />
          </Switch>
      }
    </>
  )
}

export default AppRouter