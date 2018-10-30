import React, { Component } from 'react'

class Artist extends Component {

  state = {
    data: [],
    searchResults: [],
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({data: data, searchResults: data}))
  }

  handleChange = (e) => {
    let searchKeyword = e.target.value;
    let searchResults = this.state.data.filter((eachItem) => {
      return eachItem.title.includes(searchKeyword)
    });
    this.setState({searchResults})
  }

  render () {
    let itemList = this.state.searchResults.map((item) => {
      return <li key={item.id}>{item.title}</li>
    })
    return (<div>
      <h3>Search:</h3>
      <input type="text" placeholder="Search the list with react: " onChange={this.handleChange}/>
      <ul>{itemList}</ul>
    </div>)
  }
}

export default Artist