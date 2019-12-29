// 1.引入依赖
import React, { Component } from 'react'

// 2.引入css
import "./App.css"
import constants from 'jest-haste-map/build/constants'

export default class App extends Component {

  state = {
    titles: ['Pull requests', 'lssues', 'Marketplace', 'Explore'],
    desc:''
  }
  handleClick = (v)=>{
    this.setState({
      desc:v
    })
  }
  render() {
    // let title = ['Pull requests','lssues','Marketplace','Explore']
    // let isBoy = true
    return <div>
      <ul>
        {
          this.state.titles.map((v, i) => <li onClick={this.handleClick.bind(this,v)} key={i}>{v}</li>)
        }
      </ul>
      <div>{this.state.desc}</div>
    </div>
    // let props = {
    //   className:'colRed'
    // }
    // return React.createElement('div',props,[React.createElement('span',{},'今天'),React.createElement('div',{},this.state.desc)])
  }
}