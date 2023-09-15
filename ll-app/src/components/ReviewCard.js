import React from "react";

const ReviewCard = ({userImg, name, rating, excerpt}) => {
    return (
        <article className="card">
            <section className="row card-content">
                <section className="column col-1">
                    <img src={userImg}  className="user-img" alt="user"/>
                </section>
                <section className="column col-11">
                    <p className="card-title">{name}</p>
                    <img src={rating} alt="star rating"/>
                    <p>{excerpt}</p>
                </section>
            </section>
        </article>
        
    );
}


export default ReviewCard;