import React from 'react';
import { render, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

// Mock the BasicTabs component
jest.mock('../components/Tabs', () => {
  return () => <div data-testid="mocked-basic-tabs">Mocked BasicTabs</div>;
});

// Mock the TravelCard component
jest.mock('../components/TravelCard', () => {
  return () => <div data-testid="mocked-travel-card">Mocked TravelCard</div>;
});

describe('Booking component', () => {
  test('renders booking section with correct content', () => {
    render(<Booking />);

    // Check if the header section is rendered with the correct content
    expect(screen.getByText('Amazing Flight To')).toBeInTheDocument();
    expect(screen.getByText('Switzerland')).toBeInTheDocument();
    expect(screen.getByText('Find and book a great experience')).toBeInTheDocument();

    // Check if the mocked BasicTabs component is rendered
    expect(screen.getByTestId('mocked-basic-tabs')).toBeInTheDocument();

    // Check if the card results section is rendered with the correct content
    expect(screen.getByText('Search a best place in the world')).toBeInTheDocument();
    expect(screen.getByText("whether you're looking for places for a vacation.We are here to Guide you")).toBeInTheDocument();
    expect(screen.getByText('about the details you need to check in and ease your trips in advance.')).toBeInTheDocument();

    // Check if the mocked TravelCard component is rendered
    expect(screen.getByTestId('mocked-travel-card')).toBeInTheDocument();
  });

});
