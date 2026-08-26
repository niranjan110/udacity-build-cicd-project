import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Movie List heading', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ movies: [] }),
    })
  );

  render(<App />);

  expect(screen.getByText('Movie List')).toBeInTheDocument();
});
