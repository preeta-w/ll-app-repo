import React from "react";


const SpecialsCard = ({title, price, description, imageSrc, dishLink}) => {
    return (
        <article className="card">
            <img src={imageSrc} alt={title}  className="specials-card-img"/>
            <section className="card-content">
                <p className="card-title">{title}</p>
                <p className="price">{price}</p>
                <p>{description}</p>
                <a href={dishLink} aria-label="On Click" className="text-link">Order for delivery</a>
            </section>
        </article>
        
    );
}


export default SpecialsCard;