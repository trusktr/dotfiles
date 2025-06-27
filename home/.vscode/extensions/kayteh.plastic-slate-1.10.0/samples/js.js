/**
 * Comment
 *
 * comment comment
 */

// Comment

var variable = 'string'
var variable2 = variable

let localVar = 'string'

const constant = 'CONSTANT'
const BIG_NAME = false

let numOperator = 3 + 4

let arr = ['one', 'two', numOperator]

let obj = {
  first: 'string',
  second: ['one', 'two', numOperator]
}

let templateLiteral = `this is a var ${variable}`

if (localVar) {
  console.log('log')
} else {
  console.log('log')
}

function name(param) {
  let output = param + 'string'
  return output
}

const funcName = param => {
  return false
}

import React, { Component } from 'react'
import { Map, Set } from 'immutable'

class ComponentName extends Component {
  constructor() {
    super()
    this.state = {
      one: two,
      arr: Set()
    }
  }
  render() {
    return (
      <div>
        {this.state.arr.map(vv =>
          vv
          .get('key')
          .filter(v => v !== true)
          .reduce((acc, v) => acc.add(v), Map())
          .map(v => <div>{v}</div>)
        )}
        {this.props.children}
      </div>
    )
  }
}

const ComponentName2 = () => {
  return <ComponentName>text text text</ComponentName>
}

export default ComponentName2
