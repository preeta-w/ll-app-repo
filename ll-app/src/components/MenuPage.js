import React from "react";
import Hero from "./Hero";
import bruschetta from "../images/bruschetta.png"
import MenuCard from "./MenuCard"

const starters = [
    {
        id: 1,
        type: "Starter",
        name: "Bruschetta",
        price: "$15.00",
        description: "Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil. Use a high-quality balsamic vinegar for best results",
    },
    {
        id: 2,
        type: "Starter",
        name: "starter 2",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 3,
        type: "Starter",
        name: "starter 3",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 4,
        type: "Starter",
        name: "starter 4",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
];

const mains = [
    {
        id: 1,
        type: "Main",
        name: "Greek Salad",
        price: "$18.00",
        description: "A tossed salad with lettuce, tomatoes, cucumbers, onions, olives, and feta cheese. Dressed with olive oil, vinegar or lemon juice, and oregano",
    },
    {
        id: 2,
        type: "Main",
        name: "main 2",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 3,
        type: "Main",
        name: "main 3",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 4,
        type: "Main",
        name: "main 4",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
];

const drinks = [
    {
        id: 1,
        type: "Drink",
        name: "drink 1",
        price: "$5.00",
        description: "Drink ingredients",
    },
    {
        id: 2,
        type: "Drink",
        name: "drink 2",
        price: "$5.00",
        description: "Drink ingredients",
    },
    {
        id: 3,
        type: "Drink",
        name: "drink 3",
        price: "$5.00",
        description: "Drink ingredients",
    },
    {
        id: 4,
        type: "Drink",
        name: "drink 4",
        price: "$5.00",
        description: "Drink ingredients",
    },
];

const desserts = [
    {
        id: 1,
        type: "Dessert",
        name: "Lemon Cake",
        price: "$12.00",
        description: "A Loaf cake layered with lemon cream cheese filling and topped with lemon zest whipped cream",
    },
    {
        id: 2,
        type: "Dessert",
        name: "dessert 2",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 3,
        type: "Dessert",
        name: "dessert 3",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
    {
        id: 4,
        type: "Dessert",
        name: "dessert 4",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed faucibus sem. Nunc ultrices dignissim mattis. Pellentesque pretium vehicula laoreet.",
    },
];


function MenuPage() {
    return (
        <main>
            <Hero 
                pageTitle="Seasonal Menu" 
                subhead="Farm to table fresh" 
                description="We serve seasonal produce sourced from local farms" 
                imgsrc={bruschetta}
                btnText="Reserve a Table"
            />

            <section className="row home-section-styles menu-page">

            <section className="column col-3 menu-cols">
                <h2 className="spacer-24">Starters</h2>
                    {starters.map((starter) => (
                        <MenuCard 
                            key={starter.id}
                            name={starter.name}
                            price={starter.price}
                            description={starter.description}
                        />
                    ))}

                <h2 className="spacer-24">Mains</h2>
                    {mains.map((main) => (
                        <MenuCard 
                            key={main.id}
                            name={main.name}
                            price={main.price}
                            description={main.description}
                        />
                    ))}
            </section>

            <section className="column col-3">
                <h2 className="spacer-24">Drinks</h2>
                    {drinks.map((drink) => (
                        <MenuCard 
                            key={drink.id}
                            name={drink.name}
                            price={drink.price}
                            description={drink.description}
                        />
                    ))}

                <h2 className="spacer-24">Desserts</h2>
                    {desserts.map((dessert) => (
                        <MenuCard 
                            key={dessert.id}
                            name={dessert.name}
                            price={dessert.price}
                            description={dessert.description}
                        />
                    ))}
            </section>

            </section>
        </main>
    );
}


export default MenuPage;