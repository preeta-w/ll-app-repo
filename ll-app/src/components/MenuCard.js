import React from "react";


const MenuCard = ({name, price, description}) => {
    return (
        <article className="menu-item">
            <section className="row dish-title">
                <section className="column col-6">
                    <h3>{name}</h3>
                </section>
                <section className="column col-6 menu-price">
                    <span className="price">{price}</span>
                </section>
            </section>
            
            <section className="row spacer-24">
                <p>{description}</p>
            </section>
        </article>
    );
}


export default MenuCard;