import React from "react";

const ReviewCard = ({userImg, name, rating, excerpt}) => {
    return (
        <article className="card">
            <div className="row card-content">
                <div className="column col-1">
                    <img src={userImg}  className="user-img"/>
                </div>
                <div className="column col-11">
                    <p className="card-title">{name}</p>
                    <img src={rating} alt="star rating"/>
                    <p className="lead-text">{excerpt}</p>
                </div>
            </div>
        </article>
        
    );
}


export default ReviewCard;