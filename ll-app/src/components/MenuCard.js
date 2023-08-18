import React from "react";


const MenuCard = ({name, price, description}) => {
    return (
        <article className="menu-item">
            <div className="row dish-title">
                <div className="column col-6">
                    <h3>{name}</h3>
                </div>
                <div className="column col-6 menu-price">
                    <span className="price">{price}</span>
                </div>
            </div>
            
            <div className="row spacer-24">
                <p>{description}</p>
            </div>
        </article>
    );
}


export default MenuCard;