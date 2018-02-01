import React, { Component } from 'react';
import axios from 'axios';

var REQUEST_URL ='/api/books/1';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "初期値"};
  }

  componentDidMount() {
    this.setState({title: "変更後"});
    axios.get(REQUEST_URL).then((response) => {
      console.log(response)
      this.setState({title: response.data.title})
    });
  }

  render() {
    return(
      <div>
        <h2>List of Books</h2>
      <span>{this.state.title}</span>
      </div>
    );
  }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Book />
            </div>
        );
    }
}

export default App;
