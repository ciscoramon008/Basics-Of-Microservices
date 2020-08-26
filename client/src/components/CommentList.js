import React from 'react'

export default ({ comments }) => {
    return <ul>{comments.map(comment => {
        let content

        if(comment.status === 'approved') content = comment.content
        if(comment.status === 'pending') content = 'This comment is pending moderation'
        if(comment.status === 'rejected') content = 'This comment is rejected'

        return <li key={comment.id}>{content}</li>
    })}</ul>
}