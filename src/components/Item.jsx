import React, { useContext, useState } from 'react'
import item from './item.css'
import CommentContext from '../context/comment-context'
import FullItem from './FullItem'
import { Image, Card } from 'antd'

export default function Item(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { setFullItem } = useContext(CommentContext)

  const showModal = () => {
    setFullItem({
      id: props.item.id,
      image: props.item.image,
      comment: [''],
    })
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <Card>
        <Image
          onClick={showModal}
          style={{ cursor: 'pointer', maxWidth: '70%  ' }}
          preview={false}
          src={props.item.image}
        />
      </Card>
      <>
        {isModalOpen && (
          <FullItem
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}
      </>
    </div>
  )
}
