import React from 'react';

export default ({comments}) => {
    const renderedComments = Object.values(comments).map(comment => {
        let content;

        if(comment.status == 'approved'){
            content = comment.content;
        }

        if(comment.status == 'rejected'){
            content = 'This comment has been rejected';
        }

        if(comment.status == 'pending'){
            content = 'This comment is awaiting moderation';
        }

        return <li key={comment.id}>{content}</li>
    })

    return (
        <ul className="d-flex flex-wrap flex-row justify-content-center">
          {renderedComments}  
        </ul>
    );
};