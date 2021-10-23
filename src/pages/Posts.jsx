import PostList from '../components/PostList';
import Filters from '../components/Filters';
import Search from '../components/Search';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Row, Col, Pagination, Button } from 'antd';
import { PostService } from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useSearch } from '../hooks/useSearch';
import Loader from '../components/Loader';
import PostForm from '../components/PostForm';
import { ThemeContext } from '../context/ThemeContext';

const Posts = () => {

  const limit = 10

  const [isVisible, setIsVisible] = useState(false)
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [isMounted, setIsMounted] = useState(true) 
  
  const context = useContext(ThemeContext)
  
  const searchedAndSortedPosts = useSearch(posts, selectedSort, value)
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page)

    if (isMounted) {
      setTotalCount(response.headers['x-total-count'])
      setPosts(response.data)
    }
  })

  function postSort(value) {
    setSelectedSort(value)
  }

  function removePost(id) {
    setPosts([...posts].filter(item => item.id !== id))
  }

  function modalHandler() {
    setIsVisible(!isVisible)
  }

  function setNewPost(title, body) {
    setPosts([{
      id: Date.now(),
      title: title,
      body: body,
    }, ...posts,])
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    fetchPosts()

    return () => setIsMounted(false)
    // eslint-disable-next-line
  }, [page])

  return (
    <div style={{ padding: 60, overflow: 'hidden', transition: '.3s' }}>
      <Row>
        <Col span={6}>
          <Filters
            placeholder='Сортировка'
            options={[
              { value: 'title', name: 'По названию' },
              { value: 'body', name: 'По описанию' },
            ]}
            onChange={postSort}
          />
          <div style={{ marginTop: 15 }}>
            <Button 
              onClick={modalHandler}
              type={context === 'light' ? 'light' : 'primary'}
            >
              Добавить пост
            </Button>
          </div>
        </Col>
        <Col span={18}>
          <Search value={value} onChange={(e) => setValue(e.target.value)} />
        </Col>
      </Row>
      {error &&
        <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <PostList posts={searchedAndSortedPosts} removePost={removePost} />
      }
      <Pagination
        style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}
        defaultCurrent={page}
        showSizeChanger={false}
        total={(Math.ceil(totalCount / limit) * 10)}
        onChange={e => setPage(e)}
      />
      <PostForm
        isModalVisible={isVisible}
        handleOk={setNewPost}
        closeModal={modalHandler}
      />
    </div>
  )
}

export default Posts