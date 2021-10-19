import { Button } from "antd";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import { PostService } from "../API/PostService";
import Loader from "../components/Loader";
import ProductSlider from "../components/ProductSlider";
import SinglePost from "../components/SinglePost";
import { POSTS } from "../data/pages";
import { useFetching } from "../hooks/useFetching";

const Post = () => {

  const [post, setPost] = useState({})
  const [image, setImage] = useState('')
  const [isMounted, setIsMounted] = useState(true)

  const url = useParams()
  const history = useHistory()

  const [fetchPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.getSinglePost(url.id)
    const image = await PostService.getSingleImage(url.id)

    if (isMounted) {
      setImage(image.data.url)
      setPost(response.data)
    }
  })

  useEffect(() => {
    fetchPost()

    return () => setIsMounted(false)
    // eslint-disable-next-line
  }, [])


  return (
    <div style={{ margin: 60, }}>
      {error &&
        <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <SinglePost post={post} img={image} pageId={url.id} />
      }

      <Button
        onClick={() => history.push(POSTS)}
      >
        Вернуться назад
      </Button>
      <ProductSlider />
    </div>
  )
}

export default Post