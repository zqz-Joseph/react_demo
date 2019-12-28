// 1.引入依赖
import React,{Component} from 'react'

// 2.引入css
import "./App.css"

export default class App extends Component {
  render(){
    let title = ['Pull requests','lssues','Marketplace','Explore']
    let isBoy = true
    return <div>
      <ul>
        {
          title.map((v,i) => <li key={i}>{v}</li>)
        }
      </ul>
      {
        isBoy?'男':'女'
      }
    </div>
  }
}