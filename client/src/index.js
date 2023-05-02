
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { compose } from 'redux';
// import thunk from 'redux-thunk';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { reducers } from './reducers';
// import App from './App';
// import './index.css';

// const store = createStore(reducers, applyMiddleware(thunk));
// // import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// // import thunk from 'redux-thunk';
// // import reducers from './reducers';

// // // const middleware = [thunk];

// // const store = createStore(
// //   reducers,
// //   applyMiddleware(thunk)
// // );



// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );