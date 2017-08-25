import React, { Component } from 'react';
import Commentbox from './Commentbox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getComment = this.getComment.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentComment: '',
      comments: ['first comment', 'second comment', 'third comment']
    }
  }

  getComment(event){
    var comment = event.target.value;
    this.setState({
      currentComment: comment
    })
  }

  handleClick() {
    var commentArray = this.state.comments.slice();
    commentArray.push(this.state.currentComment);
    this.setState({
      currentComment: '',
      comments: commentArray
    });
  }

  render() {
    var commentList = this.state.comments.map(function(comment, i){
      return ( <Commentbox key={i} comment={comment} /> );
    });

    return (
      <div className="appRoot">
        <h1>Comment App</h1>
        <section id="getcomments">
          <label htmlFor="comment">Post Your Comment: </label>
          <input type="text" id="comment" name="comment" onChange={this.getComment} value={this.state.currentComment} />
          <button id="addBtn" onClick={this.handleClick}>Add</button>
        </section>
        <section id="showcomments">
          <h2>There are {commentList.length} comment(s)</h2>
          {commentList}
        </section>
      </div>
    );
  }
}

export default App;
