import React, { useContext, useState } from 'react'
import CommentContext from '../context/comment-context'
import { Image, Modal, Input, Card } from 'antd'
const { TextArea } = Input

export default function FullItem(props) {
  const { fullItem, setFullItem } = useContext(CommentContext)
  const [commentInput, setCommentInput] = useState('')

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addComment()
      event.preventDefault()
    }
  }
  const postData = () => {
    fetch(
      'https://jsonplaceholder.typicode.com/posts',

      // POST не работает по этой ссылке почему-то, другие ссылки работают валидно
      // 'http://test-backend.itdelta.agency/api/image/:imageId/comments',
      {
        method: 'POST',
        body: JSON.stringify({
          imageID: fullItem.id,
          comments: props.comments,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function addComment() {
    if (commentInput.trim() !== '') {
      props.setComments([commentInput, ...props.comments])
      setFullItem({ ...fullItem, comments: props.comments })
      setCommentInput('')
      postData()
      console.log(fullItem)
    }
  }

  return (
    <Modal
      closeIcon={false}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText='Save'
      okButtonProps={{ style: { backgroundColor: 'rgba(79, 70, 229, 1)' } }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '692px',
      }}
      open={props.open}
      onOk={addComment}
      onCancel={props.onCancel}
    >
      <Image
        style={{
          maxWidth: '400px',
          borderRadius: '24px',
          marginBottom: '20px',
        }}
        preview={false}
        src={fullItem.image}
      />
      {props.comments &&
        props.comments.map((el, id) => (
          <Card key={id} style={{ margin: '20px 0 20px 0' }}>
            {el}
          </Card>
        ))}
      <div
        style={{
          color: 'rgba(55, 65, 81, 1)',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '5px',
        }}
      >
        Comment
      </div>
      <div>
        <TextArea
          onKeyPress={handleKeyPress}
          value={commentInput}
          rows={4}
          onChange={(event) => setCommentInput(event.target.value)}
        />
      </div>
      <div
        style={{
          fontSize: '14px',
          color: 'rgba(107, 114, 128, 1)',
          marginTop: '5px',
        }}
      >
        Write a few sentences about the photo.
      </div>
    </Modal>
  )
}
