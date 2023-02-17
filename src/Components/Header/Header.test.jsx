import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  test('renders the header with the correct links and total quantity in the cart', () => {
    const mockCart = [
      { id: 1, name: 'Item 1', count: 2 },
      { id: 2, name: 'Item 2', count: 1 },
    ];
    jest.mock('react-redux', () => ({
      useSelector: jest.fn().mockReturnValue({ cart: mockCart }),
    }));

    render(<Header />);

    const storeLink = screen.getByTestId('headerTest');
    expect(storeLink).toHaveTextContent('Takeaway Vitrual Store');
    expect(storeLink).toHaveAttribute('href', '/');

    const cartLink = screen.getByText(/cart/i);
    expect(cartLink).toHaveTextContent('Cart(3)');
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});
