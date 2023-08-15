import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsRequest } from '../actions/blogActions';

const Blog = ({ posts, isLoading, error, fetchPosts }) => {
  // Access the posts, isLoading, error, and fetchPosts action from the Redux store through props

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
    isLoading: state.blog.isLoading,
    error: state.blog.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPostsRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);