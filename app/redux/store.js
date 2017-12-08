
'use strict'

var {createStore, combineReducers} = require('redux')
var vars = require('./reducers/vars')
var objs = require('./reducers/objs')
var map = require('./reducers/map')

var mainReducer = combineReducers({
  vars,
  objs,
  map
})

export default module.exports = createStore(mainReducer)
