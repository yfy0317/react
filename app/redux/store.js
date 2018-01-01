import persistState from 'redux-localstorage';
'use strict'

var {createStore, combineReducers, compose} = require('redux')
var vars = require('./reducers/vars')
var objs = require('./reducers/objs')
var map = require('./reducers/map')

var mainReducer = combineReducers({
  vars,
  objs,
  map
})
const createPersistentStore = compose(
    persistState()
)(createStore);
export default module.exports = createPersistentStore(mainReducer)
