const initialState = {
    posts: [],
    isLoading: false,
    error: null
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null
        };
  
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          posts: action.payload
        };
  
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
  
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
  
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload)
        };
  
      // Add more cases for other actions as needed
  
      default:
        return state;
    }
  };
  
  export default blogReducer;