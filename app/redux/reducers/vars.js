/**
 * Created by chaiqing on 2017/7/26.
 */
'use strict'

var _ = require('lodash')
var actions = require('../actions')

module.exports = function (state = {}, action = {}) {
  if (action.type === actions.SET_VARS) {
    return _.assign({}, state, _.zipObject([action.key], [action.value]))
  }
  return state
}
