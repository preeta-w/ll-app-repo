import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        id: "1",
        name: "Paul Roth",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'I found the food truly delightful! The portion size was generous and the flavors were spot-on.'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
    {
        id: "2",
        name: "Samantha Thompson",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'Excellent food. The salad was incredibly fresh...and the added chicken was great. The food is full of flavor! It's clean eating.'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
    {
        id: "3",
        name: "Alice May",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'My family shared the hummus & pita bread as an appetizer & WOW! I personally don't care for chick peas, however this was easily THE BEST hummus I've ever tried. All options were phenomenal!'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
    {
        id: "3",
        name: "Bob Smarts",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'Though they were busy, the appetizer and meals came quickly. Our waitress and the owner took the time to make sure we were well taken care of and enjoying ourselves. If you love amazing, delicious, fresh Mediterranean food, this is the place!'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
];


const Testimonials = () => {
    return (
        <section className="testimonials-section home-section-styles">
            <section className="row">
                <div className="column col-8 spacer-48 center-title">
                    <h2>Testimonials</h2>
                </div>
            </section>

            <section className="row">
                <div className="column col-4">
                    {reviews.map((review) => (
                        <ReviewCard 
                        key={review.id}
                        userImg={review.getImageSrc()}
                        name={review.name}
                        rating={review.getStarRating()}
                        excerpt={review.excerpt}
                        />
                    ))}
                    
                </div>
            </section>
        </section>
    );
}


export default Testimonials;