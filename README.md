Travel Booking Application
Welcome to the Travel Booking Application, a React-based web application for booking travel experiences. 
This application provides users with a seamless interface to explore destinations, select travel options, and plan their trips effortlessly.

Table of Contents

Overview

Features

Technologies Used

Folder Structure

Getting Started

Redux State Management

Testing

Styling

Responsiveness

Dependencies

Contributing


Overview

The Travel Booking Application is built using React, leveraging various Material-UI (MUI) components for a visually 
appealing and intuitive user interface. The application allows users to explore travel options, select destinations, and manage trip details seamlessly.

Features

Tabbed Interface: The application features a tabbed interface with tabs for Hotel, Flight, and Car Rental,
 providing users with an organized way to explore different travel options.

Dropdowns and Date Pickers: Utilizes Autocomplete dropdowns for selecting departure and destination locations,
 along with date pickers for choosing travel dates.

Redux State Management: Employs Redux for efficient state management, with slices for handling card data and country data.

Responsive Design: The application is designed to be responsive, ensuring a consistent and user-friendly experience across various devices.

Testing: Includes Jest and testing-library/react for writing and running tests, ensuring the reliability of the application.

Technologies Used
React
Material-UI (MUI)
Redux
Jest
testing-library/react

Folder Structure

/src

  /components

    - BasicTabs.js

    - DateRangePickers.js

    - Dropdown.js

    - Form.js

    - Header.js

    - MobileDrawer.js

    - SelectVariants.js

    - TravelCard.js

  /pages

    - Booking.js

  /redux

    - cardSlice.js

    - countrySlice.js

  /styles

    - ... (style files)

/tests

  - Booking.test.js

Getting Started

To get started with the Travel Booking Application, follow these steps:

Clone the repository.

Note-->use node-16.0.0 version 

Install dependencies using npm install.

Run the application using npm start.

Open http://localhost:3000 in your browser.

Redux State Management

The application uses Redux for state management. Two slices, cardSlice and countrySlice, handle card data and country data, respectively. Selectors (selectCardData and selectCountryData) are available to access data from the Redux store.

Testing

The application includes a set of tests using Jest and testing-library/react. Run tests with npm test to ensure the reliability of the codebase.

Styling

Material-UI styling is used for consistent and aesthetically pleasing designs. Styles are defined in separate files and applied to components.

Responsiveness

The application is designed to be responsive, ensuring a seamless user experience on devices of varying screen sizes.

Dependencies

React

Material-UI

Redux

Jest

testing-library/react

For a complete list of dependencies, refer to the package.json file.
