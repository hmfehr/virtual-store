import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('renders as expected', () => {
    render(<Footer />);

    let footer = screen.getByText('footer');

    expect(footer).toHaveTextContent('Hunter Fehr');
    expect(footer).toBeInTheDocument();
  });
});