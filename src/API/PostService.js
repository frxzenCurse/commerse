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

const initialParams = {
  buildingTypeId: [],
  objectTypeId: [],
  // page: 1,
  priceSegmentId: [],
  roomId: [],
  square: [],
  view: "",
}

export const Projects = {
  getProjects: (body = initialParams) => {
    return axios.post('https://api.d4u.dev.dterra.eu/api/project/list', {...body})
  }
}

export const User = {
  getUser: (token) => {
    return axios.post('https://api.d4u.dev.dterra.eu/api/user/info', {}, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }
}

export const Auth = {
  authLogin: (username, password) => {
    return axios.post('https://api.d4u.dev.dterra.eu/oauth/token', {
      grant_type: "password",
      client_id: 2,
      client_secret: "64f2h5RwqflA5FKBCFwhuXlPhtHibpAyxgviS3WX",
      username: username,
      password: password,
    })
  }
}