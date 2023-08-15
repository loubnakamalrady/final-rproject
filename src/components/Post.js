import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/blogActions';

const Post = ({ post, deletePost }) => {
  // Access the post and deletePost action from the Redux store through props

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => dispatch(deletePost(postId))
  };
};

export default connect(null, mapDispatchToProps)(Post);