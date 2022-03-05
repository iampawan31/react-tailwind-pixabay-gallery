import React, { useCallback, useRef, useState } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import useFetch from './hooks/useFetch'

function App() {
  const [query, setQuery] = useState('')
  const [pageNum, setPageNum] = useState(1)
  const { loading, error, images, hasMore } = useFetch(query, pageNum)
  const observer = useRef()

  const lastImageRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    <div className="container mx-auto px-2">
      <ImageSearch
        searchText={(text) => {
          setQuery(text)
          setPageNum(1)
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => {
          if (images.length === index + 1) {
            return (
              <div key={index} ref={lastImageRef}>
                <ImageCard image={image} />
              </div>
            )
          } else {
            return (
              <div key={index}>
                <ImageCard image={image} />
              </div>
            )
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div>
      </div>
    </div>
  )
}

export default App
