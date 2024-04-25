import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Footer.js';

describe('Footer Component', () => {
    it('renders footer with correct content', () => {
      render(<Footer />);
  
      // Check if the company info is rendered correctly
      expect(screen.getByAltText('logo of little lemon')).toBeInTheDocument();
      expect(screen.getByText('We are a family owned restaurant, focused on traditional recipes servred with a modern twist.')).toBeInTheDocument();
  
      // Check if the important links are rendered correctly
      expect(screen.getByText('Important Links')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Menu')).toBeInTheDocument();
      expect(screen.getByText('Reservations')).toBeInTheDocument();
      expect(screen.getByText('Order Online')).toBeInTheDocument();
      expect(screen.getByText('Login')).toBeInTheDocument();
  
      // Check if the contact information is rendered correctly
      expect(screen.getByText('Contact')).toBeInTheDocument();
     
  
      // Check if the social media links are rendered correctly
      expect(screen.getByText('Social Media Links')).toBeInTheDocument();
      expect(screen.getByText('Facebook')).toBeInTheDocument();
      expect(screen.getByText('Instagram')).toBeInTheDocument();
      expect(screen.getByText('Twitter')).toBeInTheDocument();
    });
  });