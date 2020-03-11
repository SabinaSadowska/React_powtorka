import React, { Component } from 'react';
import Title from './title';
import Post from './post';
import Comments from './comments';
import Form from './form'

const title = "Moj blog";
const postTitle = 'Lorem Ipsum';
const comment='Comments:'





class App extends Component {
  state = {
    post : '',
    loader: false,
    error: false
  }
  componentDidMount(){
    this.setState({loader: true})
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(response => this.setState({
          post: response.body,
          loader: false,
          error: false
      }))
      .catch(error => this.setState({
        error: true,
        loader: false
      }))
      
  }
  render(){
    return <div>
    {this.state.loader ? 'ładowanie' : null}
    {this.state.error ? 'błąd': null}
    <Title title={title} />
    <Post postTitle={postTitle} post={this.state.post} />
    <Comments comment={comment}/>
    <Form />
  </div>
  }
}
   

export default App;
