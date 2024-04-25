import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header.js';

describe('Header Component', () => {
  it('renders header with banner content and reservation button', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the banner content is rendered
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned mediterranean restaurant/i)).toBeInTheDocument();

    // Check if the reservation button is rendered with correct label and link
    const reserveButton = screen.getByLabelText('On Click');
    expect(reserveButton).toBeInTheDocument();

    // Check if the banner image is rendered
    expect(screen.getByAltText('a person holding a plate filled with bruschettas')).toBeInTheDocument();
  });
});