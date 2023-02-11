import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe ('Footer', () => {
  test('renders as expected', () => {

    let footer = screen.getByText('Hunter Fehr');

    expect(footer).toHaveTextContent('Hunter Fehr')
    expect(footer)
  })
})
