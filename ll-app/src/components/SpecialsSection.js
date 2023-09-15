import React from "react";
import SpecialsCard from "./SpecialsCard";

const specials = [
    {
        id: "1",
        title: "Brushetta",
        price: "$15.00",
        description: "Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil. Use a high-quality balsamic vinegar for best results",
        getImageSrc: () => require("../images/bruschetta.png"),
        dishLink: "",
    },
    {
        id: "2",
        title: "Greek Salad",
        price: "$18.00",
        description: "A tossed salad with lettuce, tomatoes, cucumbers, onions, olives, and feta cheese. Dressed with olive oil, vinegar or lemon juice, and oregano",
        getImageSrc: () => require("../images/greek-salad.jpg"),
        dishLink: "#",
    },
    {
        id: "3",
        title: "Lemon Cake",
        price: "$12.00",
        description: "A Loaf cake layered with lemon cream cheese filling and topped with lemon zest whipped cream",
        getImageSrc: () => require("../images/lemon-dessert.jpg"),
        dishLink: "#",
    }
];


const Specials = () => {
    return (
        <section className="specials-section home-section-styles">
            <section className="row">
                <section className="column col-8 spacer-48 center-title">
                    <h2>Weekly Specials</h2>
                    {/*<button className="button">Order Online</button>*/}
                </section>
            </section>

            <section className="row">
                <section className="column col-8">
                    <section className="row">
                        {specials.map((special) => (
                            <SpecialsCard 
                            key={special.id}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            imageSrc={special.getImageSrc()}
                            dishLink={special.dishLink}
                            />
                        ))}
                        
                    </section>
                </section>
            </section>
        </section>
    );
}


export default Specials;