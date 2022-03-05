import { useState, useEffect } from 'react'

const useFetch = (query, pageNum) => {
  console.log(query, 4)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const fetchImages = () => {
    console.log(query, 11)
    let apiUrl = ''
    setLoading(true)
    if (query) {
      apiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&page=${pageNum}&per_page=20&image_type=photo&pretty=true`
    } else {
      apiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&page=${pageNum}&per_page=20&image_type=photo&pretty=true&editors_choice=true`
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setImages((prev) => {
          return [...new Set([...prev, ...data.hits])]
        })
        setHasMore(images.length < data.totalHits)
        setLoading(false)
      })
      .catch((err) => setError(err))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setImages([])
    }, 500)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchImages()
    }, 500)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageNum])

  return { loading, error, images, hasMore }
}

export default useFetch
