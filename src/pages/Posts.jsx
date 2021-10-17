import PostList from '../components/PostList';
import Filters from '../components/Filters';
import Search from '../components/Search';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spin, Col, Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PostService } from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useSearch } from '../hooks/useSearch';

const antIcon = <LoadingOutlined style={{ fontSize: 150, color: 'blue' }} spin />;

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const searchedAndSortedPosts = useSearch(posts, selectedSort, value)
  
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page)

    setTotalCount(response.headers['x-total-count'])
    setPosts(response.data)
  })

  function postSort(value) {
    setSelectedSort(value)
  }

  function removePost(id) {
    setPosts([...posts].filter(item => item.id !== id))
  }

  useEffect(() => {
    fetchPosts()
  }, [page])


  return (
    <div style={{ margin: 40, paddingBottom: 40, }}>
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
        </Col>
        <Col span={18}>
          <Search value={value} onChange={(e) => setValue(e.target.value)} />
        </Col>
      </Row>
      {error &&
        <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Row style={{ height: '80vh', }} justify='center' align='middle'>
          <Spin indicator={antIcon} />
        </Row>
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
    </div>
  )
}

export default Posts