import { useContext } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Items from './components/Items'
import CommentContext, {
  CommentContextProvider,
} from './context/comment-context'

function App() {
  const { loading } = useContext(CommentContext)

  if (loading) {
    return (
      <Spin
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 400,
            }}
            spin
          />
        }
      />
    )
  }

  return (
    <CommentContextProvider>
      <Items />
    </CommentContextProvider>
  )
}

export default App
