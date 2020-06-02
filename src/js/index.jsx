import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

//The Provider will provide the store to the connect() function using some of the more complex layers of React called the context.