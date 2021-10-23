import { Layout, Row, Col, } from 'antd';
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { useSearch } from '../hooks/useSearch';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import Loader from "../components/Loader";
import MyModal from '../components/MyModal';

const { Content } = Layout;

const Products = () => {

  const [value, setValue] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [isVisible, setVisible] = useState(false)

  const { products, loading } = useSelector(state => state.products)
  const { fetchProducts } = useActions(productsActionCreators)
  const {isAuth} = useSelector(state => state.login)

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  const searchedAndSortedCards = useSearch(products, selectedSort, value)

  function sortCards(value) {
    setSelectedSort(value)
  }

  function onClick() {
    setVisible(!isVisible)
  }

  return (
    <div style={{ padding: 60, overflow: 'hidden', transition: '.3s' }}>
      <Content>
        <Row>
          <Col span={6}>
            <Filters
              placeholder='Сортировка'
              options={[
                { value: 'title', name: 'По названию' },
                { value: 'text', name: 'По описанию' },
              ]}
              onChange={sortCards}
            />
          </Col>
          <Col span={18}>
            <Search value={value} onChange={(e) => setValue(e.target.value)} />
          </Col>
        </Row>
        {!loading
          ?
          <ProductList cards={searchedAndSortedCards} onClick={onClick} />
          :
          <Loader />
        }
        {!isAuth &&
          <MyModal isModalVisible={isVisible} onClick={onClick} />}
      </Content>
    </div>
  )
}

export default Products