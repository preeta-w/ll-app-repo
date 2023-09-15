import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("should validate if initializeTimes returns the correct expected value", () => {

    render(<BookingForm />);

    const timesArray = screen.getByLabelText(/Time/);

    expect(timesArray).toBeInTheDocument();

});