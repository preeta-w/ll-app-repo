import React from "react";
import { useState } from "react";



function BookingForm() {

    const 

    return (
        <main>
            <section className="home-section-styles">
                
            <form>
            <h2 className="center-title spacer-24">Book a Table</h2>
                <fieldset className="row">
                    <section className="column col-4 form-section">
                        <label htmlFor="guests">Party Size <span className="required">&#40;Required&#41;</span></label>
                        <select id="guests" name="guests">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </section>
                    
                    <section className="column col-4 form-section">
                        <label htmlFor="res-date">Date <span className="required">&#40;Required&#41;</span></label>
                        <input type="date" id="res-date" name="res-date" />
                    </section>

                    <section className="column col-4">
                        <label htmlFor="res-time">Time <span className="required">&#40;Required&#41;</span></label>
                        <select id="res-time" name="res-time">
                            <option>1:00pm</option>
                            <option>1:30pm</option>
                            <option>2:00pm</option>
                            <option>2:30pm</option>
                            <option>3:00pm</option>
                            <option>3:30pm</option>
                            <option>4:00pm</option>
                            <option>4:30pm</option>
                            <option>5:00pm</option>
                            <option>5:30pm</option>
                            <option>6:00pm</option>
                            <option>6:30pm</option>
                            <option>7:00pm</option>
                            <option>7:30pm</option>
                            <option>8:00pm</option>
                            <option>8:30pm</option>
                            <option>9:00pm</option>
                        </select>
                    </section>
                </fieldset>

                <fieldset className="row">
                    <section className="column col-6">
                        <label htmlFor="name">First and Last Name <span className="required">&#40;Required&#41;</span></label>
                        <input
                        id="name" 
                        type="text" 
                        placeholder="Full Name" 
                        name="name"
                        />
                    </section>

                    <section className="column col-6">
                        <label htmlFor="phoneNumber">Phone Number <span className="required">&#40;Required&#41;</span></label>
                        <input
                        id="phone" 
                        type="tel" 
                        placeholder="(xxx)-xxx-xxxx" 
                        name="phoneNumber"
                        />
                    </section>
                </fieldset>

                <fieldset className="row">
                    <section className="column col-6">
                        <label htmlFor="email">Email <span className="required">&#40;Required&#41;</span></label>
                        <input
                        id="email" 
                        type="email" 
                        placeholder="email@gmail.com" 
                        name="email"
                        />
                    </section>

                    <section className="column col-6">
                        <label htmlFor="occassion">Select an Occassion <span className="optional">&#40;optional&#41;</span></label>
                        <select id="occassion" name="occassion">
                            <option>Select an occassion &#40;optional&#41;</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Date night</option>
                            <option>Business Meal</option>
                            <option>Celebration</option>
                        </select>
                    </section>
                </fieldset>

                <fieldset className="row">
                    <section className="column col-12">
                        <label htmlFor="comments">Dietary Needs, Special Requests, or Comments <span className="optional">&#40;optional&#41;</span></label>
                        <textarea id="comments" name="comments" rows="4" placeholder="List all requests and comments here"></textarea>
                    </section>
                </fieldset>

                <fieldset>
                    <input className="checkbox-updates" id="reminders" type="checkbox" name="reminders"/>
                    <label style={{paddingLeft: ".5rem"}} htmlFor="reminders">Yes, I want to get text updates and reminders about my reservations. &#40;optional&#41;</label>
                </fieldset>

                <div style={{textAlign: "center"}}>
                <button className="button" type="submit">Submit</button>
                </div>
            </form>
            </section>
        </main>
    );
}


export default BookingForm;