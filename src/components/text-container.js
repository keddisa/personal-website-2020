import React from 'react'

const TextContainer = ({title, content, sizeLarge}) => {
    return (<div className="text-container">
        <div className="text-container-title">{title}</div>
        <div className = {sizeLarge ? "text-content content-large" : "text-content"}>
            {content}
        </div>
    </div>)
}

export default TextContainer;