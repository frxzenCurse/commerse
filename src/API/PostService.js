import axios from "axios"

export const PostService = {
  getPosts: (limit = 10, page = 1) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
  }
}