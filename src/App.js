import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentInput from './CommentInput';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getComment = this.getComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeComment = this.removeComment.bind(this);
    var commentQuantity = `There are 3 comments`;
    this.state = {
      currentComment: '',
      comments: ['first comment', 'second comment', 'third comment'],
      commentQuantity,
    }
  }

  updateCommentQuantiy(currentComments){
    var commentQuantity;

    if(currentComments.length > 1 || currentComments.length === 0) {
      commentQuantity = `There are ${currentComments.length} comments`;
    } else {
      commentQuantity = `There is a comment`;
    }
    return commentQuantity
  }

  removeComment(event){
    var index = event.target.value;
    var newComments = this.state.comments.slice();
    newComments.splice(index, 1);
    var commentQuantity = this.updateCommentQuantiy(newComments);
    this.setState({
      comments: newComments,
      commentQuantity,
    });
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
    var commentQuantity = this.updateCommentQuantiy(commentArray);
    this.setState({ 
      currentComment: '',
      comments: commentArray,
      commentQuantity,
    });
  }

  render() {
    var commentList = [];

    for (var i in this.state.comments) {
      commentList.push(
        <CommentBox
          value={i}
          comment={this.state.comments[i]}
          removeComment={this.removeComment}
        />
      );
    }

    return (
      <div className="appRoot">
        <h1>Comment App</h1>
        <CommentInput
          getComment={this.getComment}
          currentComment={this.state.currentComment}
          handleClick={this.handleClick}
        />
        <section id="showcomments">
          <h2>{this.state.commentQuantity}</h2>
          {commentList}
        </section>
      </div>
    );
  }
}

export default App;
