import { useState, useEffect, createContext, useContext } from 'react'

const CommentContext = createContext({
  dataImages: [],
  loading: false,
})

export function CommentContextProvider({ children }) {
  const [dataImages, setDataImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [fullItem, setFullItem] = useState([])

  useEffect(() => {
    async function preload() {
      setLoading(true)
      const response = await fetch(
        'http://test-backend.itdelta.agency/api/images'
      ).then((response) => response.json())
      setDataImages(response)
      setLoading(false)
    }
    preload()
  }, [])

  return (
    <CommentContext.Provider
      value={{
        loading,
        dataImages,
        setDataImages,
        fullItem,
        setFullItem,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}

export default CommentContext

export function useComment() {
  return useContext(CommentContext)
}
