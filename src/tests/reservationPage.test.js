import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from '../pages/reservations.js';

// Mock useFetchReservations hook
jest.mock('../Hooks/useFetch_reservations', () => () => [[], jest.fn()]);

describe('Reservations Component', () => {
  it('renders ReservationsForm when not submitted', () => {
    render(<Reservations />);

    // Check if ReservationsForm is rendered
    expect(screen.getByLabelText('Choose date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
    expect(screen.getByText('Make your reservation')).toBeInTheDocument();
  });

});