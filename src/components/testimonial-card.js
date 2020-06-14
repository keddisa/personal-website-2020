import React from 'react';

const TestimonialCard = ({headshotImage, name, title, content}) => {
    return(<div className="testimonial-card">
            <img src={require(`../images/${headshotImage}`)} alt="testimonial-image." className="testimonial-headshot"/>
            <div className="testimonial-content">
                {content}
            </div>
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-title">{title}</div>
        </div>)
}

export default TestimonialCard;