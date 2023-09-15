import React from "react";
import Hero from "./Hero";
import BookingForm from "./BookingForm";
import bruschetta from "../images/bruschetta.png"
import { useReducer } from "react";


function ReservationsPage() {

    function initializeTimes () {
        return [
            "1:00pm", 
            "1:30pm", 
            "2:00pm", 
            "2:30pm",
            "3:00pm",
            "3:30pm",
            "4:00pm",
            "4:30pm",
            "5:00pm",
            "5:30pm",
            "6:00pm",
            "6:30pm",
            "7:00pm",
            "7:30pm",
            "8:00pm",
        ]
    };

    function updateTimes (state, action) {
        switch (action.type) {
            case 'update_times':
                return action.availableTimes;
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleDateChange = (selectedDate) => {
        dispatch(
            { 
                type: 'update_times', 
                availableTimes: initializeTimes() 
            });
      };

    //const [resTime, setResTime] = useState(availableTimes[0]);

 
    
    

    return (
        <main>
            <Hero 
                pageTitle="Reservations" 
                subhead="Save your spot!" 
                description="" 
                imgsrc={bruschetta}
                btnText=""
            />

        <section className="home-section-styles reservations-page">

                <BookingForm 
                availableTimes={availableTimes}
                handleDateChange={handleDateChange}
                />
            
            </section>
        </main>
    );
}


export default ReservationsPage;