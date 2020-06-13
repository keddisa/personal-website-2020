import React from 'react'

const TitleCard = ({title, subTitle, align, backgroundImage}) => {
    return (<div className="title-card-container">
        <div className={backgroundImage ? `title-card title-card-${align} ${backgroundImage}` : `title-card title-card-${align}`}>
            <div className="title-card-main">{title}</div>
            <div className="title-card-sub">{subTitle}</div>
        </div>
    </div>
    )
}

export default TitleCard