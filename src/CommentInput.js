import React from 'react';
import PropTypes from 'prop-types';

function CommentInput(props) {
  return(
    <section id="getcomments">
      <label htmlFor="comment">Post Your Comment: </label>
      <input type="text" id="comment" name="comment" onChange={props.getComment} value={props.currentComment} />
      <button id="addBtn" onClick={props.handleClick}>Add</button>
    </section>
  );
}

CommentInput.propTypes = {
  getComment: PropTypes.func,
  handleClick: PropTypes.func,
  currentComment: PropTypes.string,
};


export default CommentInput;