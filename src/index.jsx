// reset browser specific styling
import 'reset-css/reset.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './lib/configure-store'

import App from './containers/App/App'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState)
const MOUNT_NODE = document.getElementById('root-app')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render()
