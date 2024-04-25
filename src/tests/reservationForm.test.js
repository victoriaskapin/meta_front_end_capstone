import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ReservationsForm from '../Components/ReservationsForm';

describe('ReservationsForm Component', () => {
    it('renders without crashing', () => {
      render(<ReservationsForm />);
    });
  
    it('submits form when clicked on "Make your reservation" button', async () => {
      const mockSubmitForm = jest.fn();
      render(<ReservationsForm submitForm={mockSubmitForm} />);
  
      fireEvent.click(screen.getByLabelText('On Click'));
      await waitFor(() => {
        expect(mockSubmitForm).toHaveBeenCalledTimes(1);
      });
    });

  });