import React from 'react'
import { useContext } from 'react'
import CommentContext from '../context/comment-context'
import { Row } from 'antd'
import Item from './Item'

const row = {
  padding: '20px',
}

export default function Items(props) {
  const { dataImages } = useContext(CommentContext)

  return (
    <div style={row}>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
        gutter={[20, 20]}
      >
        {dataImages.map((element) => (
          <Item key={element.id} item={element} />
        ))}
      </Row>
    </div>
  )
}
