import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders brand logo image', () => {
  render(<Header />);
  const brandLogo = screen.getByAltText('Brand Logo');
  expect(brandLogo).toBeInTheDocument();
  expect(brandLogo).toHaveAttribute(
    'src',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpgXFkhB8Gd01PzolTa8k7K-C0W6tt4Oey4Spzc6cWugz2_LYLkNolgbjIYgL8l1IrtE&usqp=CAU'
  );
});

test('renders user avatars', () => {
  render(<Header />);
  const userAvatars = screen.getAllByAltText('User Avatar');
  expect(userAvatars.length).toBe(2); //  there are two user avatars in the header

});

test('renders text elements', () => {
  render(<Header />);
  const brandText = screen.getByText('TripGuide');
  const usdText = screen.getByText('USD');
  const userName = screen.getByText('Delowar');
  expect(brandText).toBeInTheDocument();
  expect(usdText).toBeInTheDocument();
  expect(userName).toBeInTheDocument();
});

test('renders notifications icon', () => {
  render(<Header />);
  const notificationsIcon = screen.getByTestId('notifications-icon');
  expect(notificationsIcon).toBeInTheDocument();
});
