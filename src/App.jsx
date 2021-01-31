import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route as ReactRoute, Switch } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Hooks = lazy(() => import('./pages/Hooks'));
const Redux = lazy(() => import('./pages/Redux'));
const ReduxSwitch = lazy(() => import('./pages/ReduxSwitch'));
const Render = lazy(() => import('./pages/Render'));

function Route({
  component: Component,
  title,
  ...rest
}) {
  return (
    <ReactRoute
      {...rest}
      render={(props) => (
        <Layout title={title}>
          <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
          </Suspense>
        </Layout>
      )}
    />
  );
}
//events
//fetch on mount
// display none

function App() {
  return (
    <div className="App" style={{ flexGrow: 1 }}>
      <Switch>
        <Route path="/hooks" component={Hooks} title="Hooks" />
        <Route path="/redux-switch" component={ReduxSwitch} title="Redux Switch" />
        <Route path="/redux" component={Redux} title="Redux" />
        <Route path="/render" component={Render} title="Render" />
        <Route path="/" component={Home} title="Redux to Hooks" />
      </Switch>
    </div>
  );
}

Route.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
