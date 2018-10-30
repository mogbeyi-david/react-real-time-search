import React, { Component } from 'react'

class Artist extends Component {

  state = {
    data : []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render () {
    let itemList = this.state.data.map((item) => {
      return <li key={item.id}>{item.title}</li>
    });
    return (<div>
      <ul>{itemList}</ul>
    </div>)
  }
}

export default Artist