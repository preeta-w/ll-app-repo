import React from "react";


const SpecialsCard = ({title, price, description, imageSrc, dishLink}) => {
    return (
        <article className="card">
            <img src={imageSrc} alt={title}  className="specials-card-img"/>
            <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="price">{price}</p>
                <p>{description}</p>
                <a href={dishLink} className="text-link">Order for delivery</a>
            </div>
        </article>
        
    );
}


export default SpecialsCard;