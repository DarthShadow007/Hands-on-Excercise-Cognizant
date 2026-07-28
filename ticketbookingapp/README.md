# Ticket Booking App

## Overview
A React application built to demonstrate conditional UI rendering and form handling using multi-property state objects.

## Features
* **Conditional Rendering:** Uses ternary operators (`!isBooked ? Form : Ticket`) to seamlessly switch UI states upon form submission.
* **Form Event Prevention:** Utilizes `e.preventDefault()` to handle data processing in client-side React without reloading the browser.
* **Multi-Property State:** Manages passenger inputs inside a unified object state structure.

## How to Run
1. Navigate to the project directory in your terminal.
2. Run `npm install` to load dependencies.
3. Run `npm start` to launch the app at `http://localhost:3000`.