import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NewLayout from './NewLayout';
import Animal from './animal'
import store from './store'
import Header from './header'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={NewLayout} />
                            <Route path="/animals" component={Animal} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

const constReactDOM = document.getElementById('root')
ReactDOM.render(<App />, constReactDOM);