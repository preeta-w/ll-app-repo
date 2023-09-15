import React from "react";
import { useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

function BookingForm({ availableTimes, handleDateChange }) {

    const [guests, setGuests] = useState("1");
    const [resDate, setResDate] = useState(new Date());
    const [resTime, setResTime] = useState("1:00pm")
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("Select an occasion (optional)")
    const [comments, setComments] = useState("");
    const [reminders, setReminders] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        setGuests("1");
        setName("");
        setPhoneNumber("");
        setEmail("");
        setOccasion("Select an occasion (optional)");
        setComments("");
        setReminders(false);
    };

    const handleDateChangeUpdate = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
        handleDateChange(selectedDate);
    };

    return (
        <main>
            <section className="home-section-styles">
                
            <form className="form-styles" onSubmit={handleSubmit}>
            <h2 className="center-title spacer-24">Book a Table</h2>
                <fieldset className="row">
                    <section className="column col-4 form-section">
                        <label htmlFor="guests">Party Size <span className="required">&#40;Required&#41;</span></label>
                        <select
                        id="guests"
                        name="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        >
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
                        <input 
                        type="date" 
                        id="res-date" 
                        name="res-date"
                        value={resDate}
                        onChange={handleDateChangeUpdate}
                        />
                    </section>

                    <section className="column col-4">
                        <label htmlFor="res-time">Time <span className="required">&#40;Required&#41;</span></label>
                        <select
                        id="res-time"
                        name="res-time"
                        value={resTime}
                        onChange={(e) => setResTime(e.target.value)}
                        >
                            {availableTimes.map((availableTime) => (
                                <option key={availableTime} value={availableTime}>
                                    {availableTime}
                                </option>
                            ))}
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
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    </section>

                    <section className="column col-6">
                        <label htmlFor="phoneNumber">Phone Number <span className="required">&#40;Required&#41;</span></label>
                        <input
                        id="phone" 
                        type="tel" 
                        placeholder="(xxx)-xxx-xxxx" 
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
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
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                    </section>

                    <section className="column col-6">
                        <label htmlFor="occasion">Select an Occassion <span className="optional">&#40;optional&#41;</span></label>
                        <select 
                        id="occasion" 
                        name="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value);
                        }}
                        >
                            <option>Select an occasion &#40;optional&#41;</option>
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
                        <textarea 
                        id="comments" 
                        name="comments" 
                        rows="4" 
                        placeholder="List all requests and comments here"
                        value={comments}
                        onChange={(e) => {
                            setComments(e.target.value);
                        }}
                        >
                        </textarea>
                    </section>
                </fieldset>

                <fieldset>
                    <input 
                    className="checkbox-updates" 
                    id="reminders" 
                    type="checkbox" 
                    name="reminders"
                    value={reminders}
                    onChange={(e) => {
                        setReminders(!reminders);
                    }}
                    />
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