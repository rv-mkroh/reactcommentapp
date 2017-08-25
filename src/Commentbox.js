import React from 'react';
import PropTypes from 'prop-types';

function CommentBox(props) {
  return(
    <p>{props.comment} <button onClick={props.removeComment} value={props.value} >X</button></p>
  );
}

CommentBox.propTypes = {
  key: PropTypes.number,
  removeComment: PropTypes.func,
  comment: PropTypes.string,
};


export default CommentBox;