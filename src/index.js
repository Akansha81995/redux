import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import NewLayout from './NewLayout';

import store from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NewLayout />
            </Provider>
        )
    }
}

const constReactDOM = document.getElementById('root')
ReactDOM.render(<App />, constReactDOM);