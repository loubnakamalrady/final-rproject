import axios from 'axios';

// Function to fetch blog posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get('/api/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch blog posts');
  }
};

// Function to submit a comment for a blog post
export const submitComment = async (postId, comment) => {
  try {
    const response = await axios.post(`/api/posts/${postId}/comments`, comment);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit comment');
  }
};

// Add more API functions as needed