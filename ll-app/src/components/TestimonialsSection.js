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
        excerpt: "'I found the food truly delightful! The portion size was generous and the flavors were spot-on.'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
    {
        id: "3",
        name: "Alice May",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'I found the food truly delightful! The portion size was generous and the flavors were spot-on.'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
    {
        id: "3",
        name: "Bob Smarts",
        getStarRating: () => require("../images/star-rating.png"),
        excerpt: "'I found the food truly delightful! The portion size was generous and the flavors were spot-on.'",
        getImageSrc: () => require("../images/restaurant-chef-B.jpg"),
    },
];


const Testimonials = () => {
    return (
        <section className="testimonials-section home-section-styles">
            <section className="row">
                <div className="column col-2"></div>
                <div className="column col-8 spacer-48 center-title">
                    <h2>Testimonials</h2>
                </div>
                <div className="column col-2"></div>
            </section>

            <section className="row">
                <div className="column col-2"></div>
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
                <div className="column col-2"></div>
            </section>
        </section>
    );
}


export default Testimonials;