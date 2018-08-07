import { createStore,  compose } from 'redux'
import { myReducer } from './reducers'
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const storeEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const myStore = createStore(myReducer, {animalNames: []}, storeEnhancer)

export default myStore