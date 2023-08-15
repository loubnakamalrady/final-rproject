// Action creator to initiate fetching of blog posts
export const fetchPostsRequest = () => {
    return {
      type: 'FETCH_POSTS_REQUEST'
    };
  };
  
  // Action creator to handle successful fetching of blog posts
  export const fetchPostsSuccess = (posts) => {
    return {
      type: 'FETCH_POSTS_SUCCESS',
      payload: posts
    };
  };
  
  // Action creator to handle failure while fetching blog posts
  export const fetchPostsFailure = (error) => {
    return {
      type: 'FETCH_POSTS_FAILURE',
      payload: error
    };
  };
  
  // Action creator to add a new blog post
  export const addPost = (post) => {
    return {
      type: 'ADD_POST',
      payload: post
    };
  };
  
  // Action creator to delete a blog post
  export const deletePost = (postId) => {
    return {
      type: 'DELETE_POST',
      payload: postId
    };
  };
  
  // Add more action creators as needed