import React, { Component } from 'react'
import Twitter from './Twitter'

class App extends Component {

  state = {
    loading: false,
    acived: true
  }  

  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      acived: false
    })
  }

  render (){
    const posts = [{
      title: 'xpto',
      description: 'foo'
    }, {
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover Component</button>
        {this.state.acived && ( 
          <Twitter posts={posts} loading={this.state.loading}/>
        )}
       </div>     
    )
  }
}

export default App