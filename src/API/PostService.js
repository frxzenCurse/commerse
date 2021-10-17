import axios from "axios"

export const PostService = {
  getPosts: (limit = 10, page = 1) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
  },
  getSinglePost: (id) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  },
  getSingleImage: (id) => {
    return axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
  },
  getComments: (page = 1) => {
    return axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        _page: page,
      }
    })
  },
}